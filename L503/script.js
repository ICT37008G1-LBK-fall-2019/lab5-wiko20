let table = document.querySelector("#table");

function diagonalBackground(table, color) {
    for(let i = 0; i < table.rows.length; i++) {
        let cell = table.rows[i].cells[i]; 
        cell.style.backgroundColor = color;
    }
}

diagonalBackground(table, "red");




