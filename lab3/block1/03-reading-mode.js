function readingMode() {
    var paras = document.getElementsByTagName('p');
    for (var i = 0; i < paras.length; i++) {
        paras[i].setAttribute('style', 'font-size:15px');
    }
}
