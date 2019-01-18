'use strict';


let money = prompt("Ваш бюджет на месяц?", "777"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-12-11");


let appData = {
    money: money,
    timeData: time,
    expenses: [],
    optionalExpenses: "",
    income: [],
    savings: false 
};

let i = 0;

for(i = 0; i < 2; i++) {

    let expensesData = {
        subject: prompt("Введите обязательную статью расходов в этом месяце", "Статья №" + (i + 1)),
        money: prompt("Во сколько обойдется?", (i + 1) * 10)
    };

    appData.expenses[i] = expensesData;
}

console.log(appData);

alert(appData.money / 30);

// var string = `Hello
// !`;

// console.log(string);

// let persone = {
//     name: "John",
//     age: 25,
//     isMarried: false
// }

// console.log(persone.name);

// console.log(persone["age"]);

// console.log(persone);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr);

// console.log(arr[3]);

// //alert("Hello World!");

// // let answer = confirm("Are you here?");
// // console.log(answer);

//let answer = promt("Do you have any many?", "Да");
//console.log(answer);