'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

let namber = prompt('Угадай число от 1 до 100');


function guessNumber(){

    let correct = 7;
    if (namber === null) {    
        return alert('Игра окончена');
    };
    if (namber > correct) {    
        return alert('Загаданное число меньше');
    };
    if (namber < correct) {    
        return alert('Загаданное число больше');
    };
    if (!isNumber(namber)) {    
        return alert('Введи число!');
    };
    if (namber == correct) {    
        return alert('Поздравляю, Вы угадали!!!');
    };
    
};
console.log(guessNumber());