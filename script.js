let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  
  for(let i in order) {
      let elementColor = createcolorElement(order[i]);
      lightColor(elementColor, Number(i) + 1);
  }
}

// acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
      element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
      element.classList.remove('selected');
    });
}

// checa se os botoes clicados são os mesmo da ordem gerada no jogo
let checkOrder = () =>  {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

//função para o clique do usuario
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createcolorElement(color).classList.add('selected');

  setTimeout(() => {
    createcolorElement(color).classList.remove('selected');
  })

  checkOrder();
}

