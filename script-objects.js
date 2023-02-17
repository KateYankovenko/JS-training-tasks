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
// const userLogins = ["Linda", "Ben", "Nelly", "Denis"];
// const loginToFind = "Ben";
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
// const playlist = {
//     name: "My playlist",
//     tracks: ["Candy", "Owl", "Dream"],
//     owner: "Pola",
//     rating: 65,
//     getTrackCount() {
//         console.log(this.tracks.length);
//     },
// };
// console.log(playlist.name="The Best Tracks")

// console.log(playlist.tracks.push("Dunno"))
// console.log(playlist)

// console.log(playlist.rating = 432)
// console.log(playlist)

// playlist.getTrackCount();

/*
 * Перебор через for...in и Object.keys|values|entries
 */
// const books = {
//     name: "Dagon",
//     pages: 78,
// };
// const magazine = Object.create(books);
// magazine.author = "Base";
// for (const key in books) {
//     if (books.hasOwnProperty("pages")) {
//       console.log(books[key])
//     }
// }
// console.log(magazine.hasOwnProperty('name'))
// const keys = Object.keys(magazine)
// console.log(keys)

// const filterNumbers = function (array,...args) {
//     console.log("We have two arrays to compare!");
//     console.log(args)
//
//     let commonNumbers = [];

//     for (let arr of array){
//            if (args.includes(arr)) {
//                commonNumbers += arr;
//     }
//     }

//     return commonNumbers;
// }

// filterNumbers([1,2,4,5,6],6,2)

// const height = 168;
// const weight = 51;
// const location = "Poland";
// const user = {
//     name: "Jack",
//     age: 27,
//     [height]: height,
//     [weight]: weight,
//     tracks: [],
//     location,
//     changeName(inpName){
//         return user.name = inpName;
//     },
//     addHobby(hobby) {
//         return user.hobby = hobby;
//     },
//     addMusicTracks(...track) {
//         return this.tracks.push(...track)
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },
// }

// console.log(user.changeName("Sammy"))
// console.log(user.addHobby("music"))
// console.log(user.addMusicTracks("Fabiano!!!", "Gray", "Magnolia"))
// console.log(user.getTrackCount())

// user.religion = "Baptist"

// console.log(Object.entries(user))
// console.log(user.hasOwnProperty("height"))
// console.log(user.hasOwnProperty("weight"))

// console.log(user[weight]);
// console.log(user[height])
// console.log(user["age"])
// console.log(user.location)
// console.log(user)

// const a = { b: 5, c: 3, };
// const x = a;
// a.d = 6;
// console.log(x === a)
// console.log([1] === [1])

// const arr1 = [1, 4, 5]
// const arr2 = arr1;
// console.log(arr1 === arr2)
// console.log([1,2,3]===[1,2,3])


const friends = [
     {
        name: "Joe",
        age: 33,
    },
    {
        name: "Zoe",
        age: 30,
    },
     {
        name: "Roe",
        age: 37,
    },
     {
        name: "Moe",
        age: 34,
    },
]

// console.table(friends)

// for (let friend of friends) {
//     console.log(friend)
//     friend.legs = 4;
// }

//find friend by name: true/false

// const findName = function (allFriends, friendName) { 
//     let message = `${friendName} is not here!`;

//     for (const friend of allFriends) {
        
//     if (friend.name === friendName) {
//         message = `${friendName} IS here!`;
//     }    
//     }
//     return message; 
// }
// console.log(findName(friends, "Roe"))
// console.log(findName(friends, "Foe"))
    
// const getAllNames = function (users) {
//     const nameArr = [];
//     for (let user of users) {
//         if (user.name) {
//             nameArr.push(user.name);
//         }
//     }
//     return nameArr;
// }
// console.log(getAllNames(friends))

//keys quontity?
// const x = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
// }
// const keysNumbr = Object.keys(x).length
// console.log(keysNumbr)


//goods cart:

// const cart = {
//     items: [
//         { name: "Peach", price: 55, },
//         { name: "Malone", price: 58, },
//         { name: "Apple", price: 63, },
//         {name: "Grape", price: 453,},
//     ],
//     getItems() {
//         return this.items;
//     },
//     add(product = {}) {
//         this.items.push(product);
//      },
//     remove(product) {
      
//      },
//     clear() { },
//     countTotalPrice() { },
//     increaseQuantity(product) {
//         items.product.quantity += 1;
//      },
//     decreaseQuantuty(product){},
// }

// cart.add({ name: "Cherry", price: 72, })
// cart.add({ name: "Cranberry", price: 90, })
// cart.add({ name: "Watermalone", price: 431, })
// console.log(cart.items)

// cart.remove({ name: "Cherry", price: 72, })
// console.log(cart.items)

// cart.increaseQuantity({ name: "Cranberry", price: 90, })
// console.log(cart.quantity)


const user = {
    name: "Jocellyn",
    age: 34,
}

const { name, age } = user;
console.log(age)
const inp = {
    firstName: "Dafna",
    lastName: "",
    info: {
        work: "EasyCode",
        skills: ["HTML", "JS"],
    },
}
const d = inp.firstName;
const { firstName = d , lastName, info: {work, skills} } = inp;
console.log(firstName)
console.log(work)

const colors = ["white", "black", "red"];
const [w, b, r, g = "gren"] = colors;
console.log(w, b,r)


const ukrCitiesWithPopulation = {
    Odesa: 3,
    Kyiv: 4,
    Lviv: 2.6,
    Dnipro: 2,
    Kharkiv: 3,
}

const usaCitiesWithPopulation = {
    SanFrancisco: 5,
    NewYork: 8,
    Arkham: 0.5,
    Insmut: 1,
    JerusalemsLot: 1.5,
}

console.log({ ...usaCitiesWithPopulation })

const arr1 = [3,5,6,8]
console.log(Math.max(...arr1))


const { SanFrancisco, NewYork, Arkham, Insmut, JerusalemsLot } = ukrCitiesWithPopulation

function fn(ukrCitiesWithPopulation, ...params) {
    
}