

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
items['budget-value'] = document.querySelectorAll('.budget-value');
items['daybudget-value'] = document.querySelectorAll('.daybudget-value');
items['level-value'] = document.querySelectorAll('.level-value');
items['expenses-value'] = document.querySelectorAll('.expenses-value');
items['optionalexpenses-value'] = document.querySelectorAll('.optionalexpenses-value');
items['income-value'] = document.querySelectorAll('.income-value');
items['monthsavings-value'] = document.querySelectorAll('.monthsavings-value');
items['yearsavings-value'] = document.querySelectorAll('.yearsavings-value');
items['expenses-item'] = document.querySelectorAll('.expenses-item');
items['expenses-item-btn'] = document.body.getElementsByTagName('button')[0];
items['count-budget-btn'] = document.body.getElementsByTagName('button')[2];
items['optionalexpenses-item'] = document.querySelectorAll('.optionalexpenses-item');

items['income'] = document.getElementById('income');
items['savings'] = document.getElementById('savings');
items['sum'] = document.getElementById('sum');
items['percent'] = document.getElementById('percent');
items['year-value'] = document.querySelector('.year-value');
items['month-value'] = document.querySelector('.month-value');
items['day-value'] = document.querySelector('.day-value');

console.log(items);
