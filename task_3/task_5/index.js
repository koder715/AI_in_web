/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    // Массив для хранения всех версий
    const history = [initialCommit];

    return {
        // Возвращает последнюю версию массива
        head: () => history[history.length - 1],

        // Возвращает историю всех версий
        history: () => history,

        // Добавляет элемент в массив и сохраняет новую версию
        push: (element) => {
            const newVersion = [...history[history.length - 1], element];
            history.push(newVersion);
        },

        // Удаляет последний элемент и возвращает его
        pop: () => {
            const lastVersion = history[history.length - 1];
            const poppedElement = lastVersion[lastVersion.length - 1];
            const newVersion = lastVersion.slice(0, lastVersion.length - 1);
            history.push(newVersion);
            return poppedElement;
        }
    };
};
