function rainbowTribute() {
    const text = document.getElementById('tribute-text').value;
    const size = document.getElementById('tribute-size').value;
    const colors = ['#c4687a', '#c8905a', '#e8a060', '#8b4d6e', '#7a9fbd', '#6aaa8a'];
    const out = document.getElementById('tribute-output');
    out.style.fontSize = '';
    out.innerHTML = text.split('').map(function (ch, i) {
        return '<span style="color:' + colors[i % colors.length] + ';font-size:' + size + 'px">' + ch + '</span>';
    }).join('');
}
