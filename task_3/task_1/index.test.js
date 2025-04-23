import { describe, expect, test } from '@jest/globals';

import { solutionFn } from './index.js';

describe('Задача №1. Калькулятор суммы чётных чисел', () => {
    test('Функция должна корректно возвращать сумму чётных чисел, если в массиве есть чётные числа', () => {
        expect(solutionFn([1, 2, 3, 4, 5, 6])).toEqual(12);
    });

    test('Функция должна корректно возвращать сумму чётных чисел, если в массиве нет чётных чисел', () => {
        expect(solutionFn([1, 3, 5, 7, 9, 11])).toEqual(0);
    });
});