var roamingInterval = null;

function toggleRoaming() {
    var img = document.getElementById('roaming-sydney');
    var btn = document.getElementById('roaming-btn');
    if (roamingInterval) {
        clearInterval(roamingInterval);
        roamingInterval = null;
        img.style.display = 'none';
        btn.textContent = '✦ Easter egg';
    } else {
        img.style.display = 'block';
        btn.textContent = '✦ Зупинити';
        roamingInterval = setInterval(function() {
            img.style.top = Math.floor(Math.random() * (window.innerHeight - 80)) + 'px';
            img.style.left = Math.floor(Math.random() * (window.innerWidth - 80)) + 'px';
        }, 1000);
    }
}
