const converter = new showdown.Converter({
    metadata: true, tables: true, strikethrough: true, tasklists: true, emoji: true
});

// 1. Učitavanje i renderovanje
async function init() {
    try {
        const res = await fetch('metasystem_srb.md');
        const text = await res.text();
        document.getElementById('content').innerHTML = converter.makeHtml(text);
        generateTOC();
        setupScrollEffects();
    } catch (e) {
        document.getElementById('content').innerHTML = "Greška pri učitavanju traktata.";
    }
}

// 2. Automatski sadržaj (TOC)
function generateTOC() {
    const menu = document.getElementById('menu');
    const headers = document.querySelectorAll('#content h2, #content h3');
    headers.forEach((h, i) => {
        const id = `sec-${i}`;
        h.id = id;
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.innerText = h.innerText;
        link.className = h.tagName === 'H2' 
            ? "block py-2 border-l-2 border-transparent pl-4 transition-all hover:text-white"
            : "block py-1 pl-8 text-xs text-zinc-500 hover:text-zinc-300 transition-all";
        
        link.onclick = () => { if(window.innerWidth < 768) toggleMobileMenu(); };
        menu.appendChild(link);
    });
}

// 3. Scroll-Spy i Progress Bar
function setupScrollEffects() {
    const links = document.querySelectorAll('#menu a');
    const headers = Array.from(document.querySelectorAll('#content h2'));

    window.addEventListener('scroll', () => {
        // Progress bar
        const scroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        document.getElementById('progress-bar').style.width = `${(scroll / height) * 100}%`;

        // Scroll spy
        let current = "";
        headers.forEach(h => { if (scroll >= h.offsetTop - 200) current = h.id; });
        links.forEach(l => {
            l.classList.remove('active-link');
            if (l.getAttribute('href') === `#${current}`) l.classList.add('active-link');
        });
    });
}

// 4. Mobilni meni
const sidebar = document.getElementById('sidebar');
function toggleMobileMenu() {
    sidebar.classList.toggle('-translate-x-full');
}
document.getElementById('mobile-menu-btn').onclick = toggleMobileMenu;

// 5. Pretraga
function toggleSearch() {
    const modal = document.getElementById('search-modal');
    modal.classList.toggle('hidden');
    if(!modal.classList.contains('hidden')) document.getElementById('search-input').focus();
}

document.getElementById('search-input').oninput = (e) => {
    const term = e.target.value.toLowerCase();
    if (term.length > 2) {
        // Jednostavan scroll do prvog rezultata
        const paragraphs = document.querySelectorAll('#content p, #content h2, #content h3');
        for (let p of paragraphs) {
            if (p.innerText.toLowerCase().includes(term)) {
                p.scrollIntoView({ behavior: 'smooth', block: 'center' });
                p.style.backgroundColor = '#27272a'; // Kratki highlight
                setTimeout(() => p.style.backgroundColor = 'transparent', 2000);
                break;
            }
        }
    }
};

// 6. PDF Generator
function downloadPDF() {
    const element = document.getElementById('content');
    const opt = {
        margin: [1, 1],
        filename: 'Traktat_UrboWhite.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

init();
