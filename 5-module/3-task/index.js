function initCarousel() {
  let moveRight = document.querySelector('.carousel__arrow_right');
  let moveLeft = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let slidesCount = document.querySelectorAll('.carousel__slide').length;
  let carouselWidth = carousel.offsetWidth;

  let offset = 0;

  moveLeft.style.display = 'none'

  moveRight.addEventListener('click', () => {
    offset -= carouselWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    moveLeft.style.display = '';
    if (offset == -(carouselWidth*(slidesCount - 1))){
      moveRight.style.display = 'none'
    }
  })

  moveLeft.addEventListener('click', () => {

    offset += carouselWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    moveRight.style.display = '';
    if (offset == 0){
      moveLeft.style.display = 'none'
    }
  })
  
}
