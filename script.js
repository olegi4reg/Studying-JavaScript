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

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let subject = prompt("Статья необязательных расходов?", "Статья необязательных расходов №" + (i + 1));
        appData.optionalExpenses[i] = subject;
    }
}



//let calcSum = (a, b, c) => {a + b + c;};

// let str = "test";
// console.log(str.toUpperCase());
// console.log(str);


// let i = 0;

// do {
//     let expensesData = {
//         subject: prompt("Введите обязательную статью расходов в этом месяце", "Статья №" + (i + 1)),
//         money: +prompt("Во сколько обойдется?", (i + 1) * 10)
//     };

//     if (typeof(expensesData.subject) === 'string' && typeof(expensesData.subject) != null
//         && expensesData.subject != '' && expensesData.money != '' && expensesData.subject.length < 50) { 
//         appData.expenses[expensesData.subject] = expensesData.money;
//     } else {

//     }
//     i++;
// } while (i < 2)

// while (i < 2) {
//     let expensesData = {
//         subject: prompt("Введите обязательную статью расходов в этом месяце", "Статья №" + (i + 1)),
//         money: +prompt("Во сколько обойдется?", (i + 1) * 10)
//     };

//     if (typeof(expensesData.subject) === 'string' && typeof(expensesData.subject) != null
//         && expensesData.subject != '' && expensesData.money != '' && expensesData.subject.length < 50) { 
//         appData.expenses[expensesData.subject] = expensesData.money;
//     } else {

//     }
//     i++;
// }

let detectDayBudget = () => {
    appData.moneyPerDay = appData.budget / 30;
    alert( "Ежедневный бюджет:" + appData.moneyPerDay);    
};

function detectLevel(moneyPerDay) {
    if (moneyPerDay < 100) {
        return("Минимальный уровень достатка");
    } else if (moneyPerDay >= 100 && moneyPerDay < 2000) {  
        return("Средний уровень достатка");
    } else if (moneyPerDay >= 2000) {
        return("Высокий уровень достатка");
    } else {
        return("Произошла ошибка");
    }
};


detectDayBudget();
console.log(detectLevel(appData.moneyPerDay));

chooseOptExpenses();
console.log(appData);


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