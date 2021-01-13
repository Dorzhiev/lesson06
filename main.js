'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n); //пропускает только числа
};
function guessNumber(){
    let correct = Math.floor(Math.random()*101);
    console.log(correct);

    let count = 3; //попытки
    
    return function add(){ 
    if(count < 0) { //тут надо подумать, попытки на один больше получается 
        let con = confirm('Попытки закончились, загаданное число было ' + correct + ', повторим игру?');
        if(con) {
            guessNumber();
            count = 3;
            add();  
        } else {
            return;
        }
    }  
    let namber = prompt('Угадай число от 1 до 100');
    if (namber === null) {    
        return alert('Игра окончена');
    } else if (namber ==='' || !isNumber(namber)) { 
        alert('Введи число! Осталось ' + count + ' попыток.');
        count--;
        add();
    } else if (namber > correct) {    
         alert('Загаданное число меньше! Осталось ' + count + ' попыток.');
         count--;
         add();

    } else if (namber < correct) {    
        alert('Загаданное число больше! Осталось ' + count + ' попыток.');
        count--;
        add();
    } else if (namber == correct) {    
        alert('Поздравляю, Вы угадали!!!');
    }

  };
   
}
const addRandom = guessNumber();
addRandom();



