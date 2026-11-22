/* ---------- efeito de digitação ---------- */

let w = ["Desenvolvedor FullStack", "Designer", "Criador de Soluções Web"],
    i = 0,
    j = 0,
    d = false,
    e = document.getElementById("t");

(function tick() {
    let s = w[i];

    j += d ? -1 : 1;
    e.textContent = s.slice(0, j);

    let n = 90;

    if (!d && j === s.length) {
        d = true;
        n = 1600;
    } else if (d && j === 0) {
        d = false;
        i = (i + 1) % w.length;
        n = 400;
    }

    setTimeout(tick, d ? (n === 1600 ? n : 40) : n);

})();

/* ---------- link ativo do menu ---------- */

let L = document.querySelectorAll("nav a");
L.forEach(function (a) {
    a.addEventListener("click", function () {
        L.forEach(function (x) {
            x.classList.remove("on");
        });
        a.classList.add("on");
    });
});

/* ---------- modo escuro ---------- */

let R = document.documentElement,
    B = document.getElementById("th");

try {
    var sv = localStorage.getItem("th");

    if (sv) R.setAttribute("data-theme", sv);
} catch (err) { }
function isD() {
    let t = R.getAttribute("data-theme");

    return t ? t === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
}

function ic() {
    B.classList.toggle("is-dark", isD());
} 

/* troca lua por sol */
B.addEventListener("click", function () {
    let n = isD() ? "light" : "dark";

    R.setAttribute("data-theme", n);

    try {
        localStorage.setItem("th", n);
    } catch (err) { }
    ic();
});

ic();

/* ---------- menu hambúrguer ---------- */

let NV = document.getElementById("m"),
    HB = document.getElementById("hb");
function sm(o) {
    NV.classList.toggle("open", o);
    HB.setAttribute("aria-expanded", o);
    HB.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu");
}

HB.addEventListener("click", function () {
    sm(!NV.classList.contains("open"));
});

document.querySelectorAll("nav a").forEach(function (a) {
    a.addEventListener("click", function () {
        sm(false);
    });
});

sm(false);
