'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}




let correct = Math.floor(Math.random()*101);
console.log(correct);

function guessNumber(){
    let namber = prompt('Угадай число от 1 до 100', correct);
    if (namber === null) {    
        return alert('Игра окончена');
    };
    if (namber ==='' || !isNumber(namber)) {    
        alert('Введи число!');
        guessNumber();
    };
    
    if (namber > correct) {    
         alert('Загаданное число меньше');
         guessNumber();

    };
    if (namber < correct) {    
        alert('Загаданное число больше');
        guessNumber();
    };
    if (namber == correct) {    
         alert('Поздравляю, Вы угадали!!!');
    };


};
guessNumber();

