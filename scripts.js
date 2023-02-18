let color = 'black';
const colorPicker = document.getElementById("colorPicker");
const resetButton = document.getElementById("resetButton");
const slider = document.getElementById("myRange");
const inputStatus = document.querySelector(".inputStatus");
const gridContainer = document.querySelector('.gridContainer');
let inGrid = false;

colorPicker.addEventListener('input', (e) => {
  color = e.target.value;
});

slider.addEventListener('change', (e) => {
    const input = e.target.value
    gridContainer.innerHTML = '';
    initializeGrid(input);
});

slider.addEventListener('input', (e) => {
    const input = e.target.value
    inputStatus.textContent = input
});

resetButton.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.gridSquare');

    gridSquares.forEach((square) => {
        square.setAttribute('style', '')
    })
});

initializeGrid(16);


function initializeGrid(size) {
    let mouseDown = false;
    gridContainer.addEventListener('mouseenter', () => {inGrid = true;})
    gridContainer.addEventListener('mouseleave', () => {inGrid = false;})
    document.addEventListener('mousedown', (e) => {mouseDown = true; if (inGrid) e.preventDefault()});
    document.addEventListener('mouseup', () => {mouseDown = false;});
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');

        for (let j = 0; j < size; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            gridSquare.addEventListener('mouseover', () => {if (mouseDown == true) gridSquare.setAttribute('style', `background-color:${color}`)});
            gridSquare.addEventListener('click', () => {gridSquare.setAttribute('style', `background-color:${color}`)});
            gridRow.appendChild(gridSquare);
        }
        gridContainer.appendChild(gridRow);
    }
}



