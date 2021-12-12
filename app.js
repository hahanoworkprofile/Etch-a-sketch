//ui
const board = document.querySelector('.board'); 
const colorPicker = document.querySelector('input[type="color"]');
const penButton = document.querySelector('button[data-action="pen"]') ;
const eraserButton = document.querySelector('button[data-action="eraser"]');
const rainbowButton = document.querySelector('button[data-action="rainbow"] ');
const clearButton = document.querySelector('button[data-action="clear"]');
//variables
let size = 16; 
let color = colorPicker.value;

//scripting
setUp(16);
colorPicker.addEventListener('change', e => color = e.target.value);
penButton.addEventListener('click', e => color=colorPicker.value); 
eraserButton.addEventListener('click', e => color = "white"); 

//functioning
function setUp(size) { 
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i<=size*size; i++) { 
        let div = document.createElement('div'); 
        div.classList.add('grid'); 
        div.addEventListener('mouseenter', e => { 
            e.target.style["background-color"] = color
        } 
        ); 
        board.appendChild(div);
    } 
}

