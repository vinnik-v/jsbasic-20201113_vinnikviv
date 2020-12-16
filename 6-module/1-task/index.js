/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
*/
export default class UserTable {

  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table')
    this.elem.innerHTML = 
    `<table>
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
      <tbody>
          ${this.rows.map(item => `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><button class="delete">X</button></td></tr>`).join('')}
      </tbody>
    </table>`
    this.close = this.elem.querySelectorAll('.delete');
    for (let item of this.close) {
      item.onclick = (event) => {
        event.path[2].remove()
      }
    }
  }

  get() {
    return this.elem;
  }


}
