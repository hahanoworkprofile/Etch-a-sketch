let size = 16; 

const board = document.querySelector('.board');

for(let i=0; i<=size*size; i++) { 
    let grid = document.createElement('div'); 
    grid.classList.add('grid');
    board.appendChild(grid);
    console.log(i);
}

