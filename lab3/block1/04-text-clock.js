(function() {
    let total;

    function init() {
        let now = new Date();
        let laOffset = -7 * 60;
        let utc = now.getTime() + now.getTimezoneOffset() * 60000;
        let la = new Date(utc + laOffset * 60000);
        total = la.getHours() * 3600 + la.getMinutes() * 60 + la.getSeconds();
        tick();
        setInterval(tick, 1000);
    }

    function tick() {
        total++;
        let s = total % 60;
        let m = (total / 60) % 60;
        let h = (total / 3600) % 12;
        let el = function (id) {
            return document.getElementById(id);
        };
        if (el('la-hour'))   el('la-hour').style.transform   = 'rotate(' + (h * 30) + 'deg)';
        if (el('la-minute')) el('la-minute').style.transform = 'rotate(' + (m * 6)  + 'deg)';
        if (el('la-second')) el('la-second').style.transform = 'rotate(' + (s * 6)  + 'deg)';
        const dig = el('la-digital');
        if (dig) {
            const hh = Math.floor(total / 3600) % 24;
            const mm = Math.floor(total / 60) % 60;
            const ss = total % 60;
            dig.textContent = (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm + ':' + (ss < 10 ? '0' : '') + ss;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
