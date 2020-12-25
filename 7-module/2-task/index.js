import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.title = '';
    this.modalElem = '';
    this.listenerExist = false;
  }

  open() {

    let elem = document.createElement('div');
    elem.className = 'modal';
    elem.innerHTML = `
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
            ${this.title}
          </h3>
        </div>

        <div class="modal__body">
        ${this.modalElem.outerHTML}
        </div>
      </div>
    `

    // console.log(elem)

    document.body.append(elem);
    document.body.classList.add('is-modal-open');

    let modalButtonClose = document.querySelector('.modal__close');

    if (!this.listenerExist) {
      document.addEventListener('keydown', event => {
        if (event.code == "Escape") { this.close(); }
      });
      this.listenerExist = true;
    }

    modalButtonClose.addEventListener('click', event => {
      this.close();
    });

  }

  setTitle(title) {
    this.title = title;
    let modalTitle = document.querySelector('.modal__title');
    if (modalTitle) { modalTitle.textContent = title; }
  }


  setBody(elem) {
    this.modalElem = elem;
    let modalBody = document.querySelector('.modal .modal__body');
    // console.log(modalBody)
    if (modalBody) {
      modalBody.innerHTML = "";
      modalBody.insertAdjacentElement('afterBegin', body);
    }
  }

  close() {
    let modalElem = document.querySelector('.modal');
    
    if (modalElem) {
      document.body.classList.remove('is-modal-open');
      document.querySelector('.modal').remove();
    }
  }
}
