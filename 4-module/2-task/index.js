/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

    for (let i = 0, j = 0; i < table.rows.length; i++, j++) {
        table.rows[i].cells[j].style.background = 'red';
    }
}
