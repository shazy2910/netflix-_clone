const cardinfo =document.querySelector('.cardinfo');

function on() {
    document.querySelector('.cardinfo').classList.remove('invisible')
  }
  
  function off() {
    document.querySelector('.cardinfo').classList.add('invisible');
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-button-next",
      clickable: true,
    },
  });