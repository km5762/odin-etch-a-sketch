let color = 'black';
const colorPicker = document.getElementById("colorPicker");
const resetButton = document.getElementById("resetButton");

colorPicker.addEventListener('input', (e) => {
  color = e.target.value;
});

resetButton.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.gridSquare');

    gridSquares.forEach((square) => {
        square.setAttribute('style', 'background-color:white')
    })
})

function initializeGrid(size) {
    const gridContainer = document.querySelector('.gridContainer');
    let mouseDown = false;
    document.addEventListener('mousedown', (e) => {mouseDown = true; e.preventDefault()});
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



