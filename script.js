let color = "black";
let click = false;

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    let amount = size*size;
    for(i=0; i<amount; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";

        square.addEventListener("mouseover", colorSquare)
        board.insertAdjacentElement("beforeend",square);
    }   
}

populateBoard(16);

function changeSize(input) {
    populateBoard(input);
}

function colorSquare() {
    if(click) {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
        if(choice === 'random') {
        color = `hsl(${Math.random() *360}, 100%, 50%)`;
         } else {
            color = choice;
     }
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor='white');
}

document.querySelector('.board').addEventListener('click', () => {
      click = !click;
      if(click) {
        document.querySelector('.click-status').textContent = 'Coloring'
      } else {
        document.querySelector('.click-status').textContent = 'Not Coloring'
      }
})
