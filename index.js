const gridButton = document.querySelector('#setGridSize');
gridButton.addEventListener('click', resetGrid);

createGrid(16);

function createGrid(gridSize = 16) {
    const content = document.querySelector('.content');

    // delete the grid if it already exists
    const existingGrid = content.querySelector('.container');
    if (existingGrid) {
        existingGrid.remove();
    }

    const container = document.createElement('div');
    container.classList.add('container');
    container.addEventListener('mouseover', markBox);

    for (let y = 0; y < gridSize; y++ ) {
        // create row
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        // fill row with boxes
        for (let x = 0; x < gridSize; x++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
    }

    content.appendChild(container);    
};

function markBox(event) {
    if (event.target.classList.contains('box'))  {
        event.target.classList.add('marked');
    }
};

function resetGrid(event) {
    const gridSize = +(prompt('Enter a size for the grid -- Max: 100'));
    if (typeof(gridSize) === 'number' && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    }
};