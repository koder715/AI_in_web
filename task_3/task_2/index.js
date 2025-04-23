/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет"
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
    let result = [];

    // Проходим по каждому элементу массива
    for (let i = 0; i < array.length; i++) {
        if (filterFn(array[i])) {
            result.push(array[i]);
        }
    }

    // Если inplace = true, модифицируем исходный массив
    if (inplace) {
        array.length = 0; // Очищаем исходный массив
        array.push(...result); // Заполняем исходный массив отфильтрованными значениями
        return array;
    }

    // Возвращаем новый отфильтрованный массив
    return result;
};
