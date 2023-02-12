function initializeGrid(size) {
    const gridContainer = document.querySelector('.gridContainer');
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');

        for (let j = 0; j < size; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            gridSquare.addEventListener('hover', () => {gridSquare.setAttribute('style', 'background-color:black')})
            gridRow.appendChild(gridSquare);
        }
        gridContainer.appendChild(gridRow);
    }
}



