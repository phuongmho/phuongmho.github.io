/* Original theme navigation and manual galleries; figures advance only on click. */
(() => {
    "use strict";

    const nav = document.querySelector(".navbar");
    const menu = document.querySelector(".navbar-toggle");
    const links = document.querySelector(".navbar-collapse");
    if (nav && menu && links) {
        links.dataset.menuReady = "true";
        menu.addEventListener("click", () => {
            const open = menu.getAttribute("aria-expanded") !== "true";
            menu.setAttribute("aria-expanded", String(open));
            links.classList.toggle("in", open);
        });
        nav.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                links.classList.remove("in");
                menu.setAttribute("aria-expanded", "false");
                menu.focus();
            }
        });

        const backTop = document.querySelector("#back-top");
        const updateScroll = () => {
            nav.classList.toggle("navbar-shrink", window.scrollY > 150);
            if (backTop) backTop.hidden = window.scrollY <= 100;
        };
        window.addEventListener("scroll", updateScroll, { passive: true });
        updateScroll();
    }

    document.querySelectorAll("[data-gallery]").forEach((gallery) => {
        const slides = [...gallery.querySelectorAll(".research-slide")];
        const controls = gallery.querySelector(".gallery-controls");
        if (slides.length < 2 || !controls) return;

        let current = 0;
        const show = (index) => {
            current = (index + slides.length) % slides.length;
            slides.forEach((slide, i) => { slide.hidden = i !== current; });
            gallery.querySelector(".gallery-status").textContent =
                `Figure ${current + 1} of ${slides.length}`;
        };
        show(0);
        controls.hidden = false;
        controls.querySelectorAll("[data-step]").forEach((button) => {
            button.addEventListener("click", () => show(current + Number(button.dataset.step)));
        });
    });
})();
