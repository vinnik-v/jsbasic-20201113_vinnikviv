/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let i = 0; i<table.tBodies[0].rows.length; i++){
        if (table.tBodies[0].rows[i].cells[3].dataset.available == undefined){
            table.tBodies[0].rows[i].hidden = true;
        }
        else if (table.tBodies[0].rows[i].cells[3].dataset.available == 'true'){
            table.tBodies[0].rows[i].classList.add('available')
        } else table.tBodies[0].rows[i].classList.add('unavailable')

        if (table.tBodies[0].rows[i].cells[2].textContent == 'm'){
            table.tBodies[0].rows[i].classList.add('male')
        } else if (table.tBodies[0].rows[i].cells[2].textContent == 'f'){
            table.tBodies[0].rows[i].classList.add('female')
        } 

        if (table.tBodies[0].rows[i].cells[1].textContent < 18){
            table.tBodies[0].rows[i].style = "text-decoration: line-through";
        }

    }
}
