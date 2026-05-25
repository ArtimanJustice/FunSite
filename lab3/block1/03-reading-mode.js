var readingModeActive = false;

function readingMode() {
    var paras = document.getElementsByTagName('p');
    var btn = document.querySelector('[onclick="readingMode()"]');
    readingModeActive = !readingModeActive;
    for (var i = 0; i < paras.length; i++) {
        if (readingModeActive) {
            paras[i].setAttribute('style', 'font-size:19px; line-height:1.9; max-width:680px; color:#2c1810');
        } else {
            paras[i].setAttribute('style', '');
        }
    }
    if (btn) btn.textContent = readingModeActive ? 'Аа Звичайний режим' : 'Аа Читацький режим';
}
