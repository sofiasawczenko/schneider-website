const blocks = document.querySelectorAll('.block, .blocktwo');
window.addEventListener('load', function () {
  blocks.forEach(item => {
    let numElement = item.querySelector('.num');
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 10 / num;
    let circle = item.querySelector('.circle');
    let intervalId = setInterval(() => {
      if (count == num) {
        clearInterval(intervalId);
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time)
    circle.style.strokeDashoffset
      = 503 - (503 * (num / 100));
    let dots = item.querySelector('.dots');
    dots.style.transform =
      `rotate(${360 * (num / 100)}deg)`;
    if (num == 100) {
      dots.style.opacity = 0;
    }
  })
});

!(function (d) {
  var itemClassName = "carousel__photo";
  items = d.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

  function setInitialClasses() {

    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }


  function setEventListeners() {
    var next = d.getElementsByClassName('carousel__button--next')[0],
      prev = d.getElementsByClassName('carousel__button--prev')[0];

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  function disableInteraction() {
    moving = true;

    setTimeout(function () {
      moving = false
    }, 500);
  }

  function moveCarouselTo(slide) {

    if (!moving) {

      disableInteraction();

      var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;

      if ((totalItems - 1) > 3) {

        if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)) {
          oldNext = 0;
        }

        if (slide === 0) {
          newPrevious = (totalItems - 1);
          oldPrevious = (totalItems - 2);
          oldNext = (slide + 1);
        } else if (slide === (totalItems - 1)) {
          newPrevious = (slide - 1);
          newNext = 0;
          oldNext = 1;
        }

        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;

        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }

  function moveNext() {

    if (!moving) {

      if (slide === (totalItems - 1)) {
        slide = 0;
      } else {
        slide++;
      }

      moveCarouselTo(slide);
    }
  }

  function movePrev() {

    if (!moving) {

      if (slide === 0) {
        slide = (totalItems - 1);
      } else {
        slide--;
      }

      moveCarouselTo(slide);
    }
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();

    moving = false;
  }

  initCarousel();

}(document));