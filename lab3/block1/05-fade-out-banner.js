function closeBanner() {
    const banner = document.getElementById('promo-banner');
    let opacity = 1;
    const t = setInterval(function () {
        opacity -= 0.06;
        banner.style.opacity = Math.max(0, opacity);
        if (opacity <= 0) {
            clearInterval(t);
            banner.style.display = 'none';
        }
    }, 30);
}
