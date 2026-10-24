/* Reserve space for the fixed banner before the first content section. */
(() => {
    "use strict";

    const nav = document.querySelector("body.nav-spacing .navbar-fixed-top");
    if (!nav) return;

    const updateSpacing = () => {
        document.body.style.setProperty("--site-nav-height", `${nav.getBoundingClientRect().height}px`);
    };

    if (typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(updateSpacing);
        observer.observe(nav);
    }
    window.addEventListener("resize", updateSpacing);
    window.addEventListener("load", updateSpacing);
    updateSpacing();
})();
