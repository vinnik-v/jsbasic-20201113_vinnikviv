import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }

  render() {
    let div = document.createElement('div');
    div.className = 'ribbon';

    div.innerHTML = `
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <nav class="ribbon__inner">
        ${this.categories.map(elem => `<a href="#" class="ribbon__item" data-id="${elem.id}">${elem.name}</a>`).join('')}
      </nav>

      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>`

    let ribbonScrollLeftButton = div.querySelector('.ribbon__arrow_left');
    let ribbonScrollRightButton = div.querySelector('.ribbon__arrow_right');
    let ribbonInner = div.querySelector('.ribbon__inner');

    ribbonScrollLeftButton.classList.remove('ribbon__arrow_visible')

    ribbonScrollLeftButton.addEventListener('click', function (event) {
      ribbonInner.scrollBy(-350, 0)
    })

    ribbonScrollRightButton.addEventListener('click', function (event) {
      ribbonInner.scrollBy(350, 0)
    })

    ribbonInner.addEventListener('scroll', function (event) {
      let scrollWidth = event.path[2].querySelector('.ribbon__inner').scrollWidth;
      let scrollLeft = event.path[2].querySelector('.ribbon__inner').scrollLeft;
      let clientWidth = event.path[2].querySelector('.ribbon__inner').clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft == 0) {
        ribbonScrollLeftButton.classList.remove('ribbon__arrow_visible')
      } else ribbonScrollLeftButton.classList.add('ribbon__arrow_visible');

      if (scrollRight == 0) {
        ribbonScrollRightButton.classList.remove('ribbon__arrow_visible')
      } else ribbonScrollRightButton.classList.add('ribbon__arrow_visible');

    });

    let ribbonItem = div.querySelectorAll('.ribbon__item');

    for (let item of ribbonItem) {
      item.addEventListener('click', function (event) {
        event.preventDefault()
        event.path[1].querySelectorAll('.ribbon__item_active').forEach(item => item.classList.remove('ribbon__item_active'))
        event.target.classList.add('ribbon__item_active')
        let custEvent = new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
          detail: event.target.dataset.id, // уникальный идентификатора категории из её объекта
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        })
        div.dispatchEvent(custEvent);
      })
    }

    return div;

  }
}
