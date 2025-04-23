/**
 * Останавливает время на определённое количество миллисекунд
 * 
 * @param {Number} ms - количество миллисекунд, на которое необходимо остановить время
 */
function theWorld(ms) {
    let secondsRemaining = Math.floor(ms / 1000); // переводим миллисекунды в секунды
    const intervalId = setInterval(() => {
        console.log(`Time will continue running in ${secondsRemaining}`);
        secondsRemaining--;

        if (secondsRemaining < 0) {
            clearInterval(intervalId); // остановка отсчета
        }
    }, 1000);
}
