/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */
// let cost = 20;
// let star;
// switch (cost) {
//     case star = 1:
//         cost = 20;;
//         break;
//     case star = 2:
//         cost = "30$";
//         break;
//     case star = 3:
//         cost = "50$";
//         break;
//     case star = 4:
//         cost = "70$";
//         break;
//     case star = 5:
//         cost = "120$";
//         break;
//     default:
//         console.log('Такого кол-ва звезд нет');
// }
// console.log(cost);
// const stars = 5;
// let price;
// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);
// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log("There is no sucj a room!!!");
// }
// console.log(price);


//  * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
//  * 1,2 - 20$, 3,4 - 30$, 5 - 120$
//     * /
// const stars = 1;
// let price;
// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     price = "There is no such a room!!!";
// }
// console.log(price);
// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }
// console.log(price);


/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 
 * 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */
// let message;
// const option = "kurierman";
// switch (option) {
//     case "selftaking":
//         message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//         break;
//     case "kurierman":
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//         break;
//     case "post":
//         message = 'Посылка будет отправлена сегодня';
//         break;
//     default:
//         console.log('Вам перезвонит менеджер');
// }
// console.log(message);
// if (option === "selftaking") {
//     message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
// } else if (option === "kurierman") {
//     message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
// } else if (option === "post") {
//     message = 'Посылка будет отправлена сегодня';
// } else {
//     message = 'Вам перезвонит менеджер';
// }
// console.log(message);


/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
// let totalSalary = 0;
// const employees = 30;
// const minSalary = 500;
// const maxSalary = 5000;
// for (let i = 0; i <=employees; i+=1){
//     totalSalary = Math.random((minSalary+maxSalary)-minSalary)*employees;
// }
// console.log(totalSalary);


// const x = 67;
// const b = 890;
// let c = 7668;
// if (x >= c <=b) {
//     console.log(`Variable ${c} is in the range from ${x} to ${b}!`);
// }
// if (c>=x&&c<=b) {
//     console.log(`Variable ${c} is in the range from ${x} to ${b}!`);
// } else {
//     console.log(`Sorry, but variable ${c} is not in the range!!!`);
// }

// const isOnline = true;
// const dNd = false;
// const enableChat = true;
// const openChat = isOnline && enableChat && !dNd;
// console.log(`U can text ur friend now!!!`, openChat);

// if (isOnline && enableChat&& dNd ) {
//     console.log(`U can text ur friend now!!!`);
// } else {
//     console.log(`U can not text to ur friend, sorry!!!!`);
// }


// const subscrPro = "pro";
// const subscrVip = "vip";
// if (subscrPro&&subscrVip) {
//     console.log("Access allowed!");
// } else {
//     console.log("Access denied!");
// }
// const sub = "pro";
// const canAccessContent = sub === "pro" || sub === "vip";
// console.log("Can access!", canAccessContent);


// let balance = 789;
// const payment = 5046;
// console.log(`Total payment for this stuff is: ${payment}, 
// we are checking out now ur balance`);
// if (payment < balance) {
//     balance -= payment;
//     console.log(`${balance} is left on ur account, u've paid:`, payment);
// } else if (payment > balance) {
//     console.log(`U have no money enough for this stuff!!`);
// }
// console.log("Operation is ended!Thanks a lot.");

// const buyStuff = payment < balance ? console.log("On ur acc left:", balance -= payment) : `U have no money enough!`;
// console.log(buyStuff);
    