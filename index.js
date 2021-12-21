const MIN = 100;
const MAX = 1000000;
const MAXMOVES = 5;


function startGame() {
  let secretNum;
  while (true) {
    secretNum = Math.floor(Math.random() * (MAX - MIN)) + MIN + '';
    if (secretNum.length === new Set(secretNum).size) break;
  }

  let moves = 0;
  while (moves < MAXMOVES) {
    let guessNum;
    while (true) {
      guessNum = prompt(`У вас ${MAXMOVES - moves} ходов. Введите число из ${secretNum.length} различающихся цифр:`) || '';
      if (guessNum.length === secretNum.length && guessNum.length === new Set(guessNum).size) break;
    }

    if (guessNum === secretNum) {
      alert(`Вы выиграли за ${++moves} шагов! Секретное число ${secretNum}`);
      break;

    } else if (++moves === MAXMOVES) {
      alert(`Упс... Вы использовали все ходы =(. Секретное число ${secretNum}`);

    } else {
      const [bulls, cows] = guessNum.split('').reduce(([A, B], digit, i) => {
        if (digit === secretNum[i]) A++
        else if (secretNum.includes(digit)) B++;
        return [A, B];
      }, [0, 0]);

      alert(`Число быков: ${bulls}, число коров: ${cows}.`);
    }
  }
}

while (confirm('Начать игру?')) startGame();
alert('До встречи =)');
