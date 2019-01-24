'use strict';

let money, time;

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,    
    savings: true,
    moneyPerDay: 0,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {    
            let expensesData = {
                subject: prompt("Введите обязательную статью расходов в этом месяце", "Статья №" + (i + 1)),
                money: +prompt("Во сколько обойдется?", (i + 1) * 10)
            };
        
            if (typeof(expensesData.subject) === 'string' && typeof(expensesData.subject) != null
                && expensesData.subject != '' && expensesData.money != '' && expensesData.subject.length < 50) { 
                    appData.expenses[expensesData.subject] = expensesData.money;
            } else {
                i--;
            }        
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let subject = prompt("Статья необязательных расходов?", "Статья необязательных расходов №" + (i + 1));
            appData.optionalExpenses[i] = subject;
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
        alert( "Ежедневный бюджет:" + appData.moneyPerDay);     
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            return("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {  
            return("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            return("Высокий уровень достатка");
        } else {
            return("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", "100000"),
                percent = +parseFloat(prompt("Под какой процент?", "8.5 %"));        
    
            appData.monthIncome = +(save / 100 / 12 * percent).toFixed(2);
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome)
        }
    },
    chooseIncome: function() {
        let items;
        do {
            items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "подработка, премия, аренда");            
        } 
        while(items == "" || items == null || typeof(items) != "string");    
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что то еще?", "проценты по вкладам"));
        appData.income.sort();
        console.log("Способы доп. заработка: ");
        appData.income.forEach(function(item, i) {
            console.log((i + 1) + " - " + item);
        });
    },
    showDataObject: function(data, tabs) {
        for(let key in data) {
            console.log(tabs + key + ' = ' + data[key] + " (typeof = " + typeof(data[key]) + ")");
            if (typeof(data[key]) == 'object') {
                appData.showDataObject(data[key], tabs + '  ');
            };            
        }
    },
    showData: function() {
        console.log("Наша программа включает в себя данные:");
        appData.showDataObject(appData, '');
    }
};

// let detectDayBudget = () => {
//     appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
//     alert( "Ежедневный бюджет:" + appData.moneyPerDay);    
// };

function start() {
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "50000");
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-12-11");

    appData.budget = money;
    appData.timeData = time;

    appData.chooseExpenses();
    appData.chooseOptExpenses();

    appData.checkSavings();
    appData.detectDayBudget();

    appData.chooseIncome();

    appData.showData();

    console.log(appData.detectLevel(appData.moneyPerDay));   
    console.log(appData);
};

start();







// let arr = ['first', 2, 3, 'four', 5];
// arr[10] = 'ten';

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (' + mass + ')');
// });

// arr = '1, 2, 3, 15, 4'.split(', ');

// for (let key in arr) {
//     console.log(key);
// };

// for (let item of arr) {
//     console.log(item);
// };

// console.log(arr.sort(function(a, b) {
//     return a-b;
// }).join(', '));

// function first() {
//     console.log(1);

//     setTimeout( function(){
//         console.log(2);
//     }, 1000);
    
//     console.log(3);
// };

// function second() {
//     console.log(4);
// };

// first();
// second();

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