"use strict";

const fnA = function (str, callback) {//2)here fnB is a parameter for fnA
    console.log("Here is your string:", str)
    console.log(callback)//it is not an f-ion calling, shows only fn's body
    callback(123,789,654);//3)here passed params for fnB
}

const fnB = function (...params) {//4)[123,789,654]
    console.log("Callback fn:", params)//5)logging params
}

fnA("Hope is here for u!", fnB)//1)calling of funct.