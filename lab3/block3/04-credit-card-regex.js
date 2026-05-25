document.querySelector('#contact form').addEventListener('submit', function(e) {
    const val = document.getElementById('f-fan-id').value.trim();
    if (val) {
        const result = val.match(/^\d{4}-\d{4}-\d{4}-\d{4}$/);
        if (!result) {
            e.preventDefault();
            document.getElementById('f-fan-id').style.outline = '2px solid var(--rose)';
            document.getElementById('f-fan-id').focus();
        }
    }
});
