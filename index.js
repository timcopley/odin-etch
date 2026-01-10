const gridSize = 16;
const content = document.querySelector('.content');

const container = document.createElement('div');
container.classList.add('container');

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
