// progress bar

window.addEventListener("scroll", () => {

let scrollTop = document.documentElement.scrollTop;
let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let progress = (scrollTop / height) * 100;

document.getElementById("progress-bar").style.width =
progress + "%";

});


// back to top

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

if (document.body.scrollTop > 400 ||
document.documentElement.scrollTop > 400) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

};

topBtn.onclick = function () {

window.scrollTo({ top: 0, behavior: "smooth" });

};


// reading mode

document.getElementById("reading-mode").onclick = function () {

let sidebar = document.getElementById("sidebar");

if (sidebar.style.display === "none") {

sidebar.style.display = "block";

} else {

sidebar.style.display = "none";

}

};


// TOC generator

let headings = document.querySelectorAll("main h2");

let toc = document.getElementById("toc");

headings.forEach((h, i) => {

let id = "section-" + i;

h.id = id;

let li = document.createElement("li");

li.innerHTML =
`<a href="#${id}" class="block py-1">${h.innerText}</a>`;

toc.appendChild(li);

});
