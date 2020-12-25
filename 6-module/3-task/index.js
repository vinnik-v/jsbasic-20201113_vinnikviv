import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  render() {
    let div = document.createElement('div');
    div.className = 'carousel';

    div.innerHTML = `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">
      ${this.slides.map(item =>
      `<div class="carousel__slide" data-id="${item.id}">
          <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${item.price}</span>
            <div class="carousel__title">${item.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
      </div>`).join('')}
    </div>`;

    let carouselInner = div.querySelector('.carousel__inner')

    div.querySelector(".carousel__arrow_left").style.display = "none";

    const slidesCount = this.slides.length;
    let offset = 0;

    div.addEventListener("click", function (event) {
      if (event.target.closest("div.carousel__arrow_right")) {
        offset += carouselInner.offsetWidth;
        carouselInner.style.transform = "translateX(-" + offset + "px)";
        if (offset > carouselInner.offsetWidth * (slidesCount - 2)) {
          event.target.closest("div.carousel__arrow_right").style.display = "none";
        };
        if (offset > 0) {
          document.querySelector(".carousel__arrow_left").style.display = "";
        };
      } else if (event.target.closest("div.carousel__arrow_left")) {
        offset -= carouselInner.offsetWidth;
        carouselInner.style.transform = "translateX(" + offset * -1 + "px)";
        if (offset === 0) {
          event.target.closest("div.carousel__arrow_left").style.display = "none";
        };
        if (offset !== carouselInner.offsetWidth * slidesCount) {
          document.querySelector(".carousel__arrow_right").style.display = "";
        };
      }
    });

    div.addEventListener("click", function (event) {
      if (event.target.closest("button.carousel__button")) {
        let custEvent = new CustomEvent("product-add", {
          detail: event.target.closest("button.carousel__button").parentNode.parentNode.dataset.id,
          bubbles: true
        });
        div.dispatchEvent(custEvent);
      };
    });

    return div;
  }
}