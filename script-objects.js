"use strict";
/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */
// const foo = { id: 1, verified: true, color: 'green' };
// const bar = { id: 2, verified: false, color: 'red' };
// console.table({ foo, bar})

// const b = 0n;
// b?console.log("truthy"):console.log("faulthy")

//total sum of all array's even numbers
const userLogins = ["Linda", "Ben", "Nelly", "Denis"];
const loginToFind = "Ben";
// let message = `There is no ${loginToFind}`;;
// for (let login of userLogins) {
//     if (login === loginToFind) {
//         message = `There is ${loginToFind}`;
//         break;
//     }
// }
// console.log(message)
// console.log(userLogins.includes(loginToFind))

// const nums = [8, 1, 0, -1, 6];
// let smallestNum = nums[0];
// let message = "";
// for (let number of nums) {
//     if (smallestNum > number) {
//         smallestNum = number;
//         message = `Min num is ${smallestNum}`;
//     }
// }
// console.log(message);

/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */
/*
 * Вычисляемые свойства
 */
// const activity = "views";

// const playlist = {
//     name: "My play list",
//     rating: 789,
//     tracks: ["Candy Shop", "Plug Walk", "Sippy Cup"],
//     quontity: 3,
//     [activity]:67,
// };
// console.log(playlist)
// /*
//  * Короткая запись свойств
//  */
// playlist.owner = "Lily";

// console.log(playlist)

/*
 * Методы объекта и this при обращении к свойствам в методах
 
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */
const playlist = {
    name: "My playlist",
    tracks: ["Candy", "Owl", "Dream"],
    owner: "Pola",
    rating: 65,
    getTrackCount() {
        console.log(this.tracks.length);
    },
};
console.log(playlist.name="The Best Tracks")

console.log(playlist.tracks.push("Dunno"))
console.log(playlist)

console.log(playlist.rating = 432)
console.log(playlist)

playlist.getTrackCount();










    
