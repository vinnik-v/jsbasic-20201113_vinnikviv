import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();

      let customEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
        detail: this.product.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
      })

      // elem.dispatchEvent(event);

      let cardButton = this.elem.querySelector('.card__button')

      cardButton.addEventListener("click", function(event) { 
        event.path[3].dispatchEvent(customEvent);;
      });

  }

  render() {
    let div = document.createElement('div');
    div.className = 'card';
    div.innerHTML =
      `<div class="card__top">
            <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
            <span class="card__price">€${this.product.price.toFixed(2)}</span>
       </div>
       <div class="card__body">
            <div class="card__title">${this.product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>`;


    // div.querySelector('.card__button').addEventListener("click", function (event) {

    // //   new CustomEvent("product-add", { // имя события должно быть именно "product-add"
    // //   detail: this.product.id, // Уникальный идентификатора товара из объекта товара
    // //   bubbles: true // это событие всплывает - это понадобится в дальнейшем
    // // })

    // // div.dispatchEvent(event);
    // });



    return div;
  }
}
