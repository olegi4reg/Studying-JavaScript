'use strict';

let money, time;

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,    
    savings: false,
    moneyPerDay: 0,
};

// let detectDayBudget = () => {
//     appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
//     alert( "Ежедневный бюджет:" + appData.moneyPerDay);    
// };




// let btnStart = document.getElementById('start'),
//     itemBudget = document.querySelectorAll('.budget-value'),
//     itemDaybudget = document.querySelectorAll('.daybudget-value'),
//     itemLevel = document.querySelectorAll('.level-value'),
//     itemExpenses = document.querySelectorAll('.expenses-value'),
//     itemOptionalexpenses = document.querySelectorAll('.optionalexpenses-value'),
//     itemIncome = document.querySelectorAll('.income-value'),
//     itemMonthsavings = document.querySelectorAll('.monthsavings-value'),
//     itemYearsavings = document.querySelectorAll('.yearsavings-value');

let items = {};
items['start'] = document.getElementById('start');
items['budget-value'] = document.getElementsByClassName('budget-value')[0];
items['daybudget-value'] = document.querySelector('.daybudget-value');
items['level-value'] = document.querySelectorAll('.level-value')[0];
items['expenses-value'] = document.querySelectorAll('.expenses-value')[0];
items['optionalexpenses-value'] = document.querySelector('.optionalexpenses-value');
items['income-value'] = document.querySelectorAll('.income-value')[0];
items['monthsavings-value'] = document.querySelectorAll('.monthsavings-value')[0];
items['yearsavings-value'] = document.querySelectorAll('.yearsavings-value')[0];
items['expenses-item'] = document.querySelectorAll('.expenses-item');
items['expenses-item-btn'] = document.body.getElementsByTagName('button')[0];
items['count-budget-btn'] = document.body.getElementsByTagName('button')[2];
items['optionalexpenses-item'] = document.querySelectorAll('.optionalexpenses-item');
items['optionalexpenses-btn'] = document.querySelector('.optionalexpenses-btn');
items['choose-income'] = document.querySelector('.choose-income');

items['income'] = document.getElementById('income');
items['checksavings'] = document.querySelector('.checksavings');
items['savings'] = document.getElementById('savings');
items['sum'] = document.getElementById('sum');
items['percent'] = document.getElementById('percent');
items['year-value'] = document.querySelector('.year-value');
items['month-value'] = document.querySelector('.month-value');
items['day-value'] = document.querySelector('.day-value');



items['expenses-item-btn'].disabled = true;
items['count-budget-btn'].disabled = true;
items['optionalexpenses-btn'].disabled = true;

items['start'].addEventListener('click', function() {
    
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-12-11");
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "50000");
    }
    appData.budget = money;
    appData.timeData = time;

    items['budget-value'].textContent = money.toFixed();
    
    items['year-value'].value = new Date(Date.parse(time)).getFullYear();
    items['month-value'].value = new Date(Date.parse(time)).getMonth() + 1;
    items['day-value'].value = new Date(Date.parse(time)).getDate();

    items['expenses-item-btn'].disabled = false;
    items['count-budget-btn'].disabled = false;
    items['optionalexpenses-btn'].disabled = false;
    
    // appData.chooseExpenses();
    // appData.chooseOptExpenses();

    // appData.checkSavings();
    // appData.detectDayBudget();

    // appData.chooseIncome();

    // appData.showData();

//    console.log(appData.detectLevel(appData.moneyPerDay));   
    console.log(appData);
});

items['expenses-item-btn'].addEventListener('click', function() {
    let sum = 0;

    for(let i = 0; i < items['expenses-item'].length; i++) {    
        let expensesData = {
            subject: items['expenses-item'][i].value, //prompt("Введите обязательную статью расходов в этом месяце", "Статья №" + (i + 1)),
            money: items['expenses-item'][++i].value //+prompt("Во сколько обойдется?", (i + 1) * 10)
        };
    
        if (typeof(expensesData.subject) === 'string' && typeof(expensesData.subject) != null
            && expensesData.subject != '' && expensesData.money != '' && expensesData.subject.length < 50) { 
                appData.expenses[expensesData.subject] = expensesData.money;
                sum += +expensesData.money;
        } else {
            i--;
        }        
    }
    items['expenses-value'].textContent = sum;
    appData.expensesSum = sum;
});


items['optionalexpenses-btn'].addEventListener('click', function () {    
    for (let i = 0; i < items['optionalexpenses-item'].length; i++) {
        //let subject = items['optionalexpenses-item'][i].value; //prompt("Статья необязательных расходов?", "Статья необязательных расходов №" + (i + 1));
        appData.optionalExpenses[i] = items['optionalexpenses-item'][i].value;
        items['optionalexpenses-value'].textContent += appData.optionalExpenses[i] + ' ';
    }
});

items['count-budget-btn'].addEventListener('click', function () {
    if (appData.budget != undefined){
    
        appData.moneyPerDay = +((appData.budget - appData.expensesSum) / 30).toFixed(2);  
        items['daybudget-value'].textContent = appData.moneyPerDay;    

        if (appData.moneyPerDay < 100) {
            items['level-value'].textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {  
            items['level-value'].textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            items['level-value'].textContent = "Высокий уровень достатка";
        } else {
            items['level-value'].textContent = "Произошла ошибка";
        }
    } else {
        items['daybudget-value'].textContent = "Произошла ошибка";
    }
});

items['choose-income'].addEventListener('input', function () {
    let data = items['choose-income'].value;
    appData.income = data.split(', ');    
    appData.income.sort();
    items['income-value'].textContent = appData.income;
    
});

items['sum'].addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +items['sum'].value,         
            percent = +items['percent'].value;
        appData.monthIncome = +(sum / 100 / 12 * percent).toFixed(2);
        appData.yearIncome = +(sum / 100 * percent).toFixed(2);
        items['monthsavings-value'].textContent = appData.monthIncome;
        items['yearsavings-value'].textContent = appData.yearIncome;
    }
});

items['percent'].addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +items['sum'].value,         
            percent = +items['percent'].value;
        appData.monthIncome = +(sum / 100 / 12 * percent).toFixed(2);
        appData.yearIncome = +(sum / 100 * percent).toFixed(2);
        items['monthsavings-value'].textContent = appData.monthIncome;
        items['yearsavings-value'].textContent = appData.yearIncome;
    }
});

items['checksavings'].addEventListener('click', function() {    
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

//console.log(items);
