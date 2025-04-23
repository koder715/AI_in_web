/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    return snakeCaseString
        .split('_') // Разделяем строку на массив слов
        .map((word, index) => {
            // Если это первое слово, оставляем его как есть, если нет — делаем первую букву заглавной
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(''); // Объединяем слова обратно в строку
};
