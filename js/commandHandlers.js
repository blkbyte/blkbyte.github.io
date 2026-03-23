const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keydown', function(event) {
    if (event.key  === 'Enter') {
        const command = input.value.trim().toLowerCase();
        input.value = "";
        output.innerHTML = ""; // очищаем поле

        if (command === 'help') {
            output.innerHTML += 'help - показать список доступных команд<br>';
        } else {
            output.innerHTML += 'command not found<br>';
        }
    }
})
