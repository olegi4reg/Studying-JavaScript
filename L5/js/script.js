let listItems = document.body.querySelectorAll('.menu-item'),
    listItemsParent = document.body.querySelector('.menu'),
    titleElement = document.body.querySelector('.title'),
    advElement = document.body.querySelector('.adv'),
    messageElement = document.getElementById('prompt');



listItemsParent.insertBefore(listItems[2], listItems[1]);

let item = document.createElement('i5');
item.className = 'menu-item';
item.innerText = 'Пятый пункт';

listItemsParent.appendChild(item);

document.body.style.backgroundImage = "url('../img/apple_true.jpg')";

titleElement.innerText = 'Мы продаем только подлинную технику Apple';

advElement.remove();

messageElement.innerText = prompt('Как вы относитесь к технике Apple?', 'Превосходно!!!');
