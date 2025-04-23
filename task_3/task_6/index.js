/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    const isActive = className.endsWith('_active');
    const baseClass = isActive ? className.slice(0, -7) : className;
    const targetClass = isActive ? baseClass : `${baseClass}_active`;

    const elements = Array.from(document.querySelectorAll(`.${className}`));
    if (elements.length === 0) return;

    elements.forEach((el) => {
        el.classList.remove(className);
        el.classList.add(targetClass);
    });
};





