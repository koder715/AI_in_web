/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const typeCount = {};

    // Проходим по всем ключам объекта
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const type = typeof obj[key];

            // Если тип уже встречался, увеличиваем счетчик
            if (typeCount[type]) {
                typeCount[type]++;
            } else {
                // Если тип еще не встречался, добавляем его в объект
                typeCount[type] = 1;
            }
        }
    }

    // Возвращаем объект с подсчитанными типами
    return typeCount;
};
