function playGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1; // Компьютер 1 загадывает число
    console.log(`Компьютер 1 загадал число: ${secretNumber}\n`);

    let low = 1; // Нижняя граница диапазона
    let high = 100; // Верхняя граница диапазона
    let attempts = 0; // Счетчик попыток

    while (low <= high) {
        const guess = Math.floor((low + high) / 2); // Бинарный поиск — берем середину диапазона
        attempts++;
        console.log(`Компьютер 2: Пробую число ${guess}.`);

        if (guess === secretNumber) {
            console.log(`Компьютер 1: Угадал! Число было ${secretNumber}.`);
            console.log(`Количество попыток: ${attempts}`);
            break;
        } else if (guess < secretNumber) {
            console.log(`Компьютер 1: Больше.`);
            low = guess + 1; // Сужаем диапазон вверх
        } else {
            console.log(`Компьютер 1: Меньше.`);
            high = guess - 1; // Сужаем диапазон вниз
        }
    }
}
// Запуск игры
playGuessingGame();
