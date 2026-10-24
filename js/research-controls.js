/* Topic filtering and display controls; navigation and galleries use research.js. */
(() => {
    "use strict";
    const body = document.body;
    const toolbar = document.querySelector(".research-toolbar");
    const nav = document.querySelector(".navbar");
    const sections = [...document.querySelectorAll("[data-paper-section]")];
    const papers = [...document.querySelectorAll("article[data-topics]")];
    const buttons = [...document.querySelectorAll("[data-filter-topic]")];
    const status = document.querySelector(".filter-status");
    const matches = (paper, topic) => topic === "all" || paper.dataset.topics.split(/\s+/).includes(topic);
    let activeTopic = "all";

    const updateOffsets = () => {
        if (nav) body.style.setProperty("--research-nav-height", `${nav.getBoundingClientRect().height}px`);
        if (toolbar) body.style.setProperty("--research-toolbar-height", `${toolbar.getBoundingClientRect().height}px`);
    };
    if (typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(updateOffsets);
        if (nav) observer.observe(nav);
        if (toolbar) observer.observe(toolbar);
    }
    window.addEventListener("resize", updateOffsets);
    updateOffsets();
    document.querySelectorAll("[data-enhanced-control]").forEach(element => { element.hidden = false; });

    const applyFilter = (topic) => {
        activeTopic = topic;
        buttons.forEach(button => {
            button.setAttribute("aria-pressed", String(button.dataset.filterTopic === topic));
        });
        papers.forEach(paper => { paper.hidden = !matches(paper, topic); });
        sections.forEach(section => {
            section.hidden = ![...section.querySelectorAll("article[data-topics]")].some(paper => !paper.hidden);
        });
        const count = papers.filter(paper => !paper.hidden).length;
        const label = buttons.find(button => button.dataset.filterTopic === topic).dataset.topicLabel;
        status.textContent = topic === "all" ? `Showing all ${count} papers.` : `Showing ${count} papers: ${label}.`;
        updateOffsets();
    };
    buttons.forEach(button => {
        const count = papers.filter(paper => matches(paper, button.dataset.filterTopic)).length;
        button.querySelector(".filter-count").textContent = `(${count})`;
        button.addEventListener("click", () => applyFilter(button.dataset.filterTopic));
    });

    const compact = document.querySelector("#toggle-compact-view");
    compact.addEventListener("click", () => {
        const enabled = compact.getAttribute("aria-pressed") !== "true";
        body.classList.toggle("is-compact-view", enabled);
        compact.setAttribute("aria-pressed", String(enabled));
        compact.textContent = enabled ? "Show Visual Figures" : "Compact Text View";
    });

    document.querySelectorAll(".section-jump-links a").forEach(link => {
        link.addEventListener("click", () => {
            const target = document.getElementById(link.hash.slice(1));
            // An explicit section jump should always reveal its destination.
            if (target && target.hidden && activeTopic !== "all") applyFilter("all");
        });
    });
    applyFilter("all");
})();
