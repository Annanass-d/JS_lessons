// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function GetThirdPow(number) {
    return number ** 3;
}

let result = GetThirdPow(2) + GetThirdPow(3);
console.log(result);


// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
let userSalary = Number(prompt('Введите размер зарплаты'));
if (isNaN(userSalary)) {
    alert('Значение введено неверно');
}

function GetSalaryAfterTaxes(salary) {
    let finalSalary = salary * 0.87;
    console.log(`Размер заработной платы за вычетом налогов равен ${finalSalary}`);
}

GetSalaryAfterTaxes(userSalary);


// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
let userNumber1 = Number(prompt('Введите первое число'));
let userNumber2 = Number(prompt('Введите второе число'));
let userNumber3 = Number(prompt('Введите третье число'));

function GetMaxNumber(firstNumber, secondNumber, thirdNumber) {
    let max = firstNumber;
    if (secondNumber > max) max = secondNumber;
    if (thirdNumber > max) max = thirdNumber;
    return max;
}
let maxNumber = GetMaxNumber(userNumber1, userNumber2, userNumber3);
console.log('Максимальное значение: ' + maxNumber);


// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них): 1. Сложение 2. Разность 3. Умножение 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function Sum(number1, number2) {
    return number1 + number2;
}

function Subtraction(number1, number2) {
    let max = number1;
    let min = number2;
    if (number2 > max) {
        max = number2;
        min = number1;
    }
    return max - min;
}

function Multiplication(number1, number2) {
    return number1 * number2;
}

function Division(number1, number2) {
    return number1/number2;
}

console.log(Sum(5,9));
console.log(Subtraction(10,34));
console.log(Multiplication(6,32));
console.log(Division(100,3));