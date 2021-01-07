export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    if (!this.elem) {
      this.elem = this.render();
    }

    
  }

  render() {

    let sliderSteps = document.createElement('div');
    sliderSteps.className = 'slider__steps'

    function spans(steps) {
      for (let i = 0; i < steps; i++) {
        sliderSteps.insertAdjacentHTML("beforeEnd", "<span></span>");
      }
      return sliderSteps;
    }

    let spansElems = spans(this.steps)

    let elem = document.createElement('div')
    elem.className = 'slider'

    elem.innerHTML = `
    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb">
      <span class="slider__value">0</span>
    </div>
  
    <!--Полоска слайдера-->
    <div class="slider__progress"></div>
  
    <!-- Шаги слайдера (вертикальные чёрточки) -->
    `

    elem.insertAdjacentElement("beforeEnd", spansElems);

    elem.querySelector('.slider__steps>span').className = 'slider__step-active'

    elem.addEventListener('click', (event) => {
      let offsetX = event.offsetX;
      let stepLength = event.target.clientWidth / (this.steps - 1)

      let stepValue = Math.round(offsetX / stepLength);

      event.path[1].querySelector('.slider__value').textContent = stepValue;
      let stepElem = event.path[1].querySelectorAll('.slider__steps>span')

      for (let item of stepElem) {
        item.className = '';
      }
      stepElem[stepValue].className = 'slider__step-active';

      let thumb = event.path[1].querySelector('.slider__thumb');
      let progress = event.path[1].querySelector('.slider__progress');

      let leftPercents = stepValue * (100 / (this.steps - 1)); // Значение в процентах от 0 до 100

      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      let custEvent = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: stepValue, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает - это понадобится в дальнейшем
      })
      
      elem.dispatchEvent(custEvent);
      
    })

    return elem;
  }
}


