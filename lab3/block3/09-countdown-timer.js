(function tickBirthday() {
    const now = new Date();
    const next = new Date(now.getFullYear(), 8, 12);
    if (now >= next) next.setFullYear(next.getFullYear() + 1);
    const diff = next - now;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff % 86400000 / 3600000);
    const m = Math.floor(diff % 3600000 / 60000);
    const s = Math.floor(diff % 60000 / 1000);
    document.getElementById('birthday-counter').textContent =
        '🎂 До дня народження: ' + d + 'д ' + h + 'год ' + m + 'хв ' + s + 'с';
    setTimeout(tickBirthday, 1000);
}());
