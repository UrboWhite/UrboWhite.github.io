(function() {
  'use strict';

  // ---------- DYNAMIC SIDEBAR GENERATION ----------
  function generateSidebar() {
    const navList = document.getElementById('dynamic-nav-list');
    if (!navList) return;
    const headings = document.querySelectorAll('#content-body h2, #content-body h3, #content-body h4');
    if (!headings.length) return;

    let html = '';
    headings.forEach(heading => {
      const level = heading.tagName.toLowerCase();
      const id = heading.id;
      if (!id) return;
      let text = heading.textContent.trim();
      let className = '';
      if (level === 'h2') className = 'nav-h2';
      else if (level === 'h3') className = 'nav-h3';
      else if (level === 'h4') className = 'nav-h4';
      html += `<li class="nav-item ${className}" data-target="${id}"><a href="#${id}" class="nav-link">${text}</a></li>`;
    });
    navList.innerHTML = html;
  }

  // ---------- EXISTING FUNCTIONALITY (progress, back to top, scrollspy, search, etc.) ----------
  // Note: The scrollspy and navigation click handlers will be attached after DOM is ready.

  let progressBar = document.getElementById('progress-bar');
  function updateProgress() {
    let h = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (h > 0 ? (window.scrollY / h * 100) : 0) + '%';
  }

  let backToTop = document.getElementById('back-to-top');
  function updateBackToTop() {
    if (window.scrollY > 400) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  }
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        updateProgress();
        updateBackToTop();
        updateScrollSpy();
        ticking = false;
      });
      ticking = true;
    }
  });

  let sidebar = document.getElementById('sidebar');
  let overlay = document.getElementById('sidebar-overlay');
  let hamburger = document.getElementById('hamburger');

  const svgHamburger = `<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>`;
  const svgClose    = `<line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/>`;

  function setHamburgerIcon(isOpen) {
    const svg = hamburger.querySelector('svg');
    if (!svg) return;
    svg.innerHTML = isOpen ? svgClose : svgHamburger;
  }

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
    setHamburgerIcon(true);
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
    setHamburgerIcon(false);
  }
  hamburger.addEventListener('click', function() {
    if (sidebar.classList.contains('open')) closeSidebar();
    else openSidebar();
  });
  overlay.addEventListener('click', closeSidebar);

  // Scrollspy
  let navItems = [];
  function updateScrollSpy() {
    let fromTop = window.scrollY + 110;
    let activeId = null;
    const headings = document.querySelectorAll('#content-body h2, #content-body h3, #content-body h4');
    for (let i = headings.length-1; i >= 0; i--) {
      const el = headings[i];
      if (el.offsetTop <= fromTop) {
        activeId = el.id;
        break;
      }
    }
    document.querySelectorAll('.nav-item.active').forEach(el => el.classList.remove('active'));
    if (activeId) {
      const activeItem = document.querySelector(`.nav-item[data-target="${activeId}"]`);
      if (activeItem) activeItem.classList.add('active');
      // auto-scroll sidebar if needed
      const sb = document.getElementById('sidebar');
      if (activeItem && sb) {
        const itemTop = activeItem.offsetTop;
        if (itemTop < sb.scrollTop + 80 || itemTop > sb.scrollTop + sb.clientHeight - 80) {
          sb.scrollTo({ top: itemTop - sb.clientHeight / 2, behavior: 'smooth' });
        }
      }
    }
  }

  // Theme toggle
  let themeBtn = document.getElementById('theme-btn');
  let iconSun = document.getElementById('icon-sun');
  let iconMoon = document.getElementById('icon-moon');
  function setTheme(light) {
    if (light) {
      document.body.classList.add('light-mode');
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    } else {
      document.body.classList.remove('light-mode');
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    }
    try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch(e) {}
  }
  themeBtn.addEventListener('click', function() {
    setTheme(!document.body.classList.contains('light-mode'));
  });
  try {
    if (localStorage.getItem('theme') === 'light') setTheme(true);
  } catch(e) {}

  document.getElementById('pdf-btn').addEventListener('click', function() {
    window.print();
  });

  // Search functionality
  let searchBtn = document.getElementById('search-btn');
  let searchModal = document.getElementById('search-modal');
  let searchInput = document.getElementById('search-input');
  let searchResults = document.getElementById('search-results');
  let searchIndex = [];

  function buildSearchIndex() {
    searchIndex = [];
    document.querySelectorAll('#content-body h2, #content-body h3, #content-body h4, #content-body p').forEach(el => {
      let text = el.textContent.trim();
      if (text.length < 10) return;
      let heading = '';
      let headingId = el.id || '';
      let prev = el.previousElementSibling;
      while (prev) {
        if (/^H[1-4]$/.test(prev.tagName) && prev.id) { heading = prev.textContent.trim(); break; }
        prev = prev.previousElementSibling;
      }
      if (/^H[1-4]$/.test(el.tagName)) heading = text;
      if (!headingId) {
        let p = el.previousElementSibling;
        while (p) {
          if (/^H[1-4]$/.test(p.tagName) && p.id) { headingId = p.id; break; }
          p = p.previousElementSibling;
        }
      }
      searchIndex.push({ text: text, id: headingId || el.id, heading: heading, isHead: /^H/.test(el.tagName) });
    });
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function doSearch(query) {
    if (!query || query.length < 2) {
      searchResults.innerHTML = '<div class="search-empty">Enter at least 2 characters...</div>';
      return;
    }
    let q = query.toLowerCase();
    let results = [];
    for (let item of searchIndex) {
      if (item.text.toLowerCase().indexOf(q) !== -1) {
        results.push(item);
        if (results.length >= 12) break;
      }
    }
    if (!results.length) {
      searchResults.innerHTML = '<div class="search-empty">No results for: ' + query + '</div>';
      return;
    }
    let frag = document.createDocumentFragment();
    results.forEach(r => {
      let idx = r.text.toLowerCase().indexOf(q);
      let s = Math.max(0, idx - 55);
      let e = Math.min(r.text.length, idx + q.length + 55);
      let snippet = (s > 0 ? '...' : '') + r.text.slice(s, e) + (e < r.text.length ? '...' : '');
      snippet = snippet.replace(new RegExp('(' + escapeRegex(query) + ')', 'gi'), '<mark>$1</mark>');
      let div = document.createElement('div');
      div.className = 'search-result-item';
      div.dataset.targetId = r.id;
      let title = document.createElement('div');
      title.className = 'search-result-title';
      title.textContent = r.isHead ? r.text.slice(0, 80) : (r.heading || 'Contents').slice(0, 80);
      let snip = document.createElement('div');
      snip.className = 'search-result-snippet';
      snip.innerHTML = snippet;
      div.appendChild(title);
      div.appendChild(snip);
      frag.appendChild(div);
    });
    searchResults.innerHTML = '';
    searchResults.appendChild(frag);
  }

  function openSearch() {
    searchModal.classList.add('open');
    setTimeout(() => searchInput.focus(), 50);
  }
  function closeSearch() {
    searchModal.classList.remove('open');
    searchInput.value = '';
    searchResults.innerHTML = '';
  }

  searchBtn.addEventListener('click', openSearch);
  searchModal.addEventListener('click', e => { if (e.target === searchModal) closeSearch(); });
  searchInput.addEventListener('input', () => doSearch(searchInput.value));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });
  searchResults.addEventListener('click', e => {
    let item = e.target.closest('.search-result-item');
    if (!item) return;
    let id = item.dataset.targetId;
    closeSearch();
    if (!id) return;
    let target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.classList.add('highlight-section');
      setTimeout(() => target.classList.remove('highlight-section'), 1500);
    }
  });

  window.copyCitation = function(btn) {
    let block = btn.parentElement;
    let text = block.textContent.replace('Copy citation', '').trim();
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy citation'; }, 2000);
    });
  };

  // After content is loaded, generate sidebar and initialize event listeners for nav links
  window.addEventListener('DOMContentLoaded', function() {
    generateSidebar();
    buildSearchIndex();
    // Attach click handlers for dynamic nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 900) closeSidebar();
        // smooth scroll is native with href, but prevent default to avoid hash jump? Actually we want hash jump but smooth.
        // The browser handles it natively if we don't prevent. We'll keep default.
      });
    });
    updateScrollSpy();
    updateProgress();
    updateBackToTop();
  });

  // Web3Forms handler
  var kForma = document.getElementById('kontakt-forma');
  if (kForma) {
    kForma.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn     = document.getElementById('k-submit');
      var btnTxt  = document.getElementById('k-btn-text');
      var spinner = document.getElementById('k-btn-spinner');
      var status  = document.getElementById('k-status');

      // Validacija
      var ime    = document.getElementById('k-ime').value.trim();
      var email  = document.getElementById('k-email').value.trim();
      var poruka = document.getElementById('k-poruka').value.trim();
      var emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!ime || !email || !poruka) {
        status.className = 'k-err';
        status.textContent = '⚠ Molimo popunite sva polja.';
        return;
      }
      if (!emailOK) {
        status.className = 'k-err';
        status.textContent = '⚠ Email adresa nije ispravna.';
        return;
      }

      btn.disabled = true;
      btnTxt.hidden = true;
      spinner.hidden = false;
      status.className = '';
      status.textContent = '';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(kForma)
      })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        btn.disabled = false;
        btnTxt.hidden = false;
        spinner.hidden = true;
        if (data.success) {
          status.className = 'k-ok';
          status.textContent = '✓ Poruka uspešno poslata! Odgovorićemo uskoro.';
          kForma.reset();
        } else {
          status.className = 'k-err';
          status.textContent = '✗ Greška pri slanju. Pokušajte ponovo.';
        }
      })
      .catch(function() {
        btn.disabled = false;
        btnTxt.hidden = false;
        spinner.hidden = true;
        status.className = 'k-err';
        status.textContent = '✗ Nema veze sa serverom. Proverite internet i pokušajte ponovo.';
      });
    });
  }

})();
