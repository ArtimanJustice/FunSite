function showCalendar() {
    var month = parseInt(document.getElementById('cal-month').value);
    var year = parseInt(document.getElementById('cal-year').value);
    var firstDay = new Date(year, month - 1, 1).getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1;
    var daysInMonth = new Date(year, month, 0).getDate();
    var today = new Date();
    var dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
    var html = '<table class="facts__table" style="min-width:280px"><thead><tr>';
    for (var d = 0; d < 7; d++) html += '<th>' + dayNames[d] + '</th>';
    html += '</tr></thead><tbody><tr>';
    for (var e = 0; e < firstDay; e++) html += '<td></td>';
    var col = firstDay;
    for (var day = 1; day <= daysInMonth; day++) {
        if (col === 7) { html += '</tr><tr>'; col = 0; }
        var isToday = day === today.getDate() && month - 1 === today.getMonth() && year === today.getFullYear();
        html += '<td' + (isToday ? ' style="background:var(--rose);color:#fff;border-radius:4px;font-weight:700"' : '') + '>' + day + '</td>';
        col++;
    }
    while (col > 0 && col < 7) { html += '<td></td>'; col++; }
    html += '</tr></tbody></table>';
    document.getElementById('cal-output').innerHTML = html;
}

(function() {
    var now = new Date();
    document.getElementById('cal-month').value = now.getMonth() + 1;
    document.getElementById('cal-year').value = now.getFullYear();
    showCalendar();
}());
