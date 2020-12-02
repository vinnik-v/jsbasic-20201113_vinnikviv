/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arrNumbers = str.split(' ').join(',').split(',').map(item => parseFloat(item)).filter(item => isFinite(item));

    return {
        min: Math.min(...arrNumbers),
        max: Math.max(...arrNumbers),
    }
}
