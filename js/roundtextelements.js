window.addEventListener("load", () => {
    Array.from(document.getElementsByClassName("text")).forEach(e => {
        var computedStyle = getComputedStyle(e);
        var roundedWidth = Math.ceil(parseFloat(computedStyle.width));
        e.style.width = roundedWidth + 'px';
    });
});