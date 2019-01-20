'use strict';


let money = +prompt("Ваш бюджет на месяц?", "50000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-12-11");


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,    
    savings: false 
};

for(let i = 0; i < 2; i++) {    
    let expensesData = {
        subject: prompt("Введите обязательную статью расходов в этом месяце", "Статья №" + (i + 1)),
        money: +prompt("Во сколько обойдется?", (i + 1) * 10)
    };

    if (typeof(expensesData.subject) === 'string' && typeof(expensesData.subject) != null
        && expensesData.subject != '' && expensesData.money != '' && expensesData.subject.length < 50) { 
        appData.expenses[expensesData.subject] = expensesData.money;
    } else {

    }
    
};

appData.moneyPerDay = appData.budget / 30;

console.log(appData);

alert( "Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {  
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}


//let y = 1; 
//let x = y = 2;

//console.log( "ёжик" > "яблоко" );

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