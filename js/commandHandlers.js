const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        input.value = "";
        output.innerHTML = ""; // очищаем поле

        if (command === 'help') {
            output.innerHTML += 'help - показать список доступных команд<br>about - обо мне<br>clear - очистка экрана';
        } else if (command === 'about') { // обо мне
            output.innerHTML += 'Сейчас я изучаю fullstack-разработку, но особенно интересуюсь низкоуровневым программированием (C, системное программирование) и тем, как устроены операционные системы.<br>';
        } else if (command === 'clear') { // очистка экрана
            output.innerHTML += '';
        } 
        else {
            output.innerHTML += 'command not found<br>';
        }
    }
});
