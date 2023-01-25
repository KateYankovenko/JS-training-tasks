
// ;  * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
// ;  * от потраченной суммы за всё время (партнёрская программа).
// ;  *
// ;  * - Общая сумма потраченного хранится в переменной totalSpent
// ;  * - Сумма текущего платежа хранится в переменной payment
// ;  * - Скидка хранится в переменной discount
// ;  *
// ;  * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
// ;  * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
// ;  * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
// ;  * - Если потрачено меньше 100) - не партнёр, скидка 0%
// ;  *
// ;  * - В результате вывести сообщение
// ;  * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»


// let payment = 100;//Сумма текущего платежа
// let discount = 0;//Скидка
// let totalSpent = 1500;//потраченной суммы за всё время (партнёрская программа).

// if (totalSpent>=100 && totalSpent<1000) {
//     discount = 0.02;
//     console.log(`U are our bronse partner, discount is: ${discount}%!`);
// } else if(totalSpent>=1000&&totalSpent<5000){
//     discount = 0.05;
//     console.log(`U are our silver partner, discount is: ${discount}%!`);
// } else if (totalSpent>=5000) {
//     discount = 0.1;
//   console.log(`U are our gold partner, discount is: ${discount}%!`);
// } else {
//     discount = 0;
//     console.log(`U have to pay only: ${totalSpent}`);
// }

// payment -= payment * discount;
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);


/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */
// const cost = 120;
// let message = "Такого кол-ва звезд нет";
// if (cost === 20) {
//     message = `Here u are in a 1 star Hotel with cost ${cost}$`;
// } else if(cost === 30){
//     message = `Here u are in a 2 star Hotel with cost ${cost}$`;
// } else if(cost === 50) {
//     message = `Here u are in a 3 star Hotel with cost ${cost}$`;
// } else if (cost === 70) {
//     message = `Here u are in a 4 star Hotel with cost ${cost}$`;
// } else if (cost === 120) {
//     message = `Here u are in a 5 star Hotel with cost ${cost}$`;
// }
// console.log(message);

// const stars = 7;
// let cost;
// switch (stars) {
//     case 1:
//         cost = 20;
//         break;
//     case 2:
//         cost = 30;
//         break;
//     case 3:
//         cost = 50;
//         break;
//     case 4:
//         cost = 70;
//         break;
//     case 5:
//         cost = 120;
//         break;
//     default:
//         console.log("There is no such a place to stay!!!");
// }
// console.log(cost);



/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */
// const stars = 3;
// let cost;
// if (stars===1||stars===2) {
//     cost = 20;
// } else if (stars===3||stars===4) {
//     cost = 30;
// } else if (stars === 5) {
//     cost = 120;
// } else {
//     console.log("There is no such a hotel!");
// }

// const stars = 7;
// let cost;
// switch (stars) {
//     case 1:
//     case 2:
//         cost = 20;
//         break;
//     case 3:
//     case 4:
//         cost = 30;
//         break;
//     case 5:
//         cost = 120;
//         break;
//     default:
//         console.log("There is no such a place!");
// }


/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

// const option = "";
// let message = "";
// if (option === "I'lltake") {
//     message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
// } else if (option === "coureerman") {
//     message = "Курьер доставит заказ завтра с 9:00 до 18:00";
// } else if (option === "post") {
//     message = "Посылка будет отправлена сегодня";
// } else {
//     message = "Manager will call u back!";
// }
// console.log(message);

// const option = "post";
// let message = "";
// switch (option) {
//     case "Illtake":
//         message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
//         break;
//     case "coureerman":
//         message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//         break;
//     case "post":
//         message = "Посылка будет отправлена сегодня";
//         break;
//     default:
//         console.log("Manager will call u back!");
// }
// console.log(message);

//  1. сделать переменные
// const option = 2;
// let message = '';

// // 2. сделать switch 1 2 3
// // 3. в каждом кейсе записать в message строку
// switch (option) {
//   case 1:
//     message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//     break;

//   case 2:
//     message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//     break;

//   case 3:
//     message = 'Посылка будет отправлена сегодня';
//     break;

//   default:
//     message = 'Вам перезвонит менеджер';
// }

// // 4. сделать лог message
// console.log(message);


/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
// const employees = 56;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;
// for (let i = 1; i <= employees;i+=1){
//     // 3сгенерить случайную зп for each employee
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary);
//        console.log(`ЗП работника номер ${i} - ${salary}`);
//    // 4  прибавить к тоталу each salary of every separate employee
//    totalSalary += salary;
// }
// console.log(totalSalary);


/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
// const minNumber = 0;
// const maxNumber = 5;
// let evenSumm = 0;
// for (let i = minNumber; i <= maxNumber; i+=1){
//     //check if the number is even
// if(i % 2 == 0) {
//     console.log("The number is even.");
//     evenSumm += i;
//     console.log(evenSumm);
// }
// // if the number is odd
// else {
//     console.log("The number is odd.");
// }
// }

//  1 вары
// const min = 0;
// const max = 5;
// let total = 0;
// // фор от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   // проверяем остаток от деления
//   if (i % 2 !== 0) {
//     console.log('Не чётное: ', i);
//     continue;
//   }
//   // пишем в сумму
//   console.log('чётное: ', i);
//   total += i;
//   // аналог +=
//   // total = total + i;
// }
// console.log('total: ', total);


/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */
// let balance = 560;
// const payment = 900;
// let message = `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`;
// if (payment <= balance) {
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log(`На счету недостаточно средств для проведения операции!`);
// }
// console.log("Операция завершена");


/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */
// let totalSpent = 980;
// const payment = 789;
// let discount;
// if (100 <= totalSpent <= 1000) {
//     console.log("Bronse partner!");
//     discount = 0.02;
// } else if (1000 < totalSpent <= 5000) {
//     console.log("Silver partner!");
//     discount = 0.03;
// } else if (totalSpent > 5000) {
//     console.log("Gold partner!");
//     discount = 0.04;
// } else {
//     console.log("Not a partner!");
// }

// totalSpent += payment;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount*100}%`);

