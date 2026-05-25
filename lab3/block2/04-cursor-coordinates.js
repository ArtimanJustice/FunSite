document.querySelector('main').addEventListener('mousemove', function(e) {
    var el = document.getElementById('cursor-pos');
    el.style.opacity = '1';
    el.textContent = 'x ' + e.clientX + ' y ' + e.clientY;
});

document.querySelector('main').addEventListener('mouseleave', function() {
    document.getElementById('cursor-pos').style.opacity = '0';
});
