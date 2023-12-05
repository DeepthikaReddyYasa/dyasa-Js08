document.addEventListener('DOMContentLoaded', function () {
    const game = new BaseballGame();
    const keyElement = document.getElementById('key');
    const guessElement = document.getElementById('guess');
    const newButton = document.getElementById('new');
    const tbodyStat = document.getElementById('tbody-stat');

    newButton.addEventListener('click', function () {
        game.key = game.generateKey();
        keyElement.textContent = game.key;
        guessElement.textContent = '';
        tbodyStat.innerHTML = '';
    });

    document.querySelectorAll('.digit').forEach(button => {
        button.addEventListener('click', function () {
            guessElement.textContent += button.textContent;
            if (guessElement.textContent.length === 3) {
                const stats = game.calculateStats(guessElement.textContent);
                const newRow = document.createElement('tr');
                newRow.innerHTML = `<td>${guessElement.textContent}</td><td>${stats[0]}</td><td>${stats[1]}</td>`;
                tbodyStat.appendChild(newRow);
                guessElement.textContent = '';
            }
        });
    });
});