(function tickBirthday() {
    var now = new Date();
    var next = new Date(now.getFullYear(), 8, 12);
    if (now >= next) next.setFullYear(next.getFullYear() + 1);
    var diff = next - now;
    var d = Math.floor(diff / 86400000);
    var h = Math.floor(diff % 86400000 / 3600000);
    var m = Math.floor(diff % 3600000 / 60000);
    var s = Math.floor(diff % 60000 / 1000);
    document.getElementById('birthday-counter').textContent =
        '🎂 До дня народження: ' + d + 'д ' + h + 'год ' + m + 'хв ' + s + 'с';
    setTimeout(tickBirthday, 1000);
}());
