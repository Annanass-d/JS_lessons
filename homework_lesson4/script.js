// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log('0 - это ноль');
    }
    else if (i % 2 === 0) {
        console.log(`${i} - это четное число`);
    } else {
        console.log(`${i} - это нечетное число`);
    }
}



// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
const arrayNew = array.slice(0, 3);
arrayNew.push(6, 7);
console.log(arrayNew);



// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function SumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function GetMinNumber(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) min = array[i];
    }
    return min;
}

function FindNumberThree(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) count++;
    }
    if (count === 0) {
        console.log('В массиве нет числа 3');
    } else {
        console.log(`В массиве есть число 3 и встречается оно ${count} раз(-а)`);
    }
}

const arr = [];
for (let i = 0; i <= 5; i++) {
    arr[i] = GetRandomInt(0, 10);
}
console.log(arr);
console.log('Сумма элементов массива равна ' + SumArrayElements(arr));
console.log('Минимальное число в массиве это ' + GetMinNumber(arr));
FindNumberThree(arr);



// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
let x = 'x';
console.log(x);
for (let i = 1; i < 20; i++) {
    x += 'x';
    console.log(x);
}