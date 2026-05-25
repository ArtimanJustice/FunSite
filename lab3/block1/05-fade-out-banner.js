function closeBanner() {
    var banner = document.getElementById('promo-banner');
    var opacity = 1;
    var t = setInterval(function() {
        opacity -= 0.06;
        banner.style.opacity = Math.max(0, opacity);
        if (opacity <= 0) { clearInterval(t); banner.style.display = 'none'; }
    }, 30);
}
