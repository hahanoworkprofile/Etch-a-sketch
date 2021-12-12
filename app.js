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
let mode ="pen";
//scripting
setUp(16);
colorPicker.addEventListener('change', e => color = e.target.value);
penButton.addEventListener('click', e => mode="pen"); 
eraserButton.addEventListener('click', e => mode="eraser"); 
rainbowButton.addEventListener('click', e=> mode="rainbow"); 
clearButton.addEventListener('click', e=> document.querySelectorAll('.grid').forEach(div=> div.style.backgroundColor = 'white'));
//functioning
function setUp(size) { 
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i<=size*size; i++) { 
        let div = document.createElement('div'); 
        div.classList.add('grid'); 
        div.addEventListener('mouseenter', e => {
           const randColor = () => Math.round(Math.random() *200 );
           if(mode=="rainbow") { 
                  e.target.style.backgroundColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
                  console.log(e.target.style.backgroundColor);
                  return;  
            }
            if(mode=="eraser") { 
                e.target.style.backgroundColor = 'white';
                return;
            }
            color = colorPicker.value;
            e.target.style.backgroundColor = color;
        });
        board.appendChild(div);
    } 
}

