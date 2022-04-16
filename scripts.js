function createGrid(size) {
    const container = document.querySelector('.container');
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        container.append(row);
        row.className = 'row';
        for(let j = 0; j< size; j++){
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('mouseover', () => hoverEvent(cell));
            row.append(cell);
        }
    }
}

function removeGrid() {
    const cells = document.querySelectorAll('.cell');
    const rows = document.querySelectorAll('.row');
    cells.forEach(e => e.remove());
    rows.forEach(e => e.remove());
}

createGrid(16);

function setSize(){
    let size = prompt("Type in grid size (1-100): ");
    if (isNaN(size)) {size = 16;}
    if (size>100) {size = 100;}
    if (size<1) {size = 1;}
    removeGrid();
    createGrid(size);
}

function clearGrid() {
    console.log("clearGrid() called");
    const cells = document.querySelectorAll('.cell');
    cells.forEach(e => e.style.backgroundColor='transparent');
}

function hoverEvent(div) {
    div.style.backgroundColor = 'purple';
}

const sizeButton = document.querySelector('.menu .size');
const resetButton = document.querySelector('.menu .reset');

sizeButton.addEventListener('click', () => setSize());
resetButton.addEventListener('click',() => clearGrid());

const cells = document.querySelectorAll('.cell');
cells.forEach((div) => {
    div.addEventListener('mouseover', () => hoverEvent(div));
});