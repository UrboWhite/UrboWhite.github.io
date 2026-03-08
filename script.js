const converter = new showdown.Converter({
    metadata: true,
    tables: true,
    strikethrough: true,
    tasklists: true,
    emoji: true,
    simplifiedAutoLink: true
});

async function loadMarkdown() {
    try {
        const response = await fetch('metasystem_srb.md');
        const text = await response.text();
        const html = converter.makeHtml(text);
        const contentArea = document.getElementById('content');
        
        contentArea.innerHTML = html;

        // Generisanje navigacije nakon što se HTML učita
        generateMenu();
        initScrollSpy();
    } catch (err) {
        document.getElementById('content').innerHTML = "<p class='text-red-500'>Fajl metasystem_srb.md nije pronađen u repozitorijumu.</p>";
    }
}

function generateMenu() {
    const menu = document.getElementById('menu');
    const headers = document.querySelectorAll('#content h2, #content h3');
    
    headers.forEach((header, index) => {
        const id = `sec-${index}`;
        header.id = id;
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.innerText = header.innerText;
        
        if (header.tagName === 'H3') {
            link.className = "block text-[11px] pl-4 text-gray-600 hover:text-gray-300 transition-all py-1 italic";
        } else {
            link.className = "block text-xs uppercase tracking-tight py-2 transition-all border-l border-transparent hover:text-white";
        }
        
        menu.appendChild(link);
    });
}

function initScrollSpy() {
    const links = document.querySelectorAll('#menu a');
    const headers = Array.from(document.querySelectorAll('#content h2, #content h3'));

    window.addEventListener('scroll', () => {
        // Progress Bar logic
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";

        // Scroll Spy logic
        let current = "";
        headers.forEach(header => {
            if (window.scrollY >= header.offsetTop - 150) {
                current = header.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active-link');
            }
        });
    });
}

function downloadPDF() {
    const element = document.getElementById('content');
    const opt = {
        margin: 1,
        filename: 'Metasystem_UrboWhite.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Privremeno menjamo boje za PDF (crno na belo) radi uštede
    html2pdf().set(opt).from(element).save();
}

// Inicijalizacija
loadMarkdown();
