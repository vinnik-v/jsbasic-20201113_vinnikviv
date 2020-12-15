function toggleText() {
  let elem = document.querySelector('.toggle-text-button');

  elem.addEventListener('click', () => {
    text.hidden == false? text.hidden = true: text.hidden = false;
  })
}
