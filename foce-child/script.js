/*const section_observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    
     const titre = entry.target.querySelector('h2 div , h3 ');
    
     if(entry.isIntersecting) {
       
       titre.classList.add('animation-titre');
       return;
     }
     titre.classList.remove('animation-titre');
   });
   
 });
const Sections= document.querySelectorAll('.story ,#studio ,.story #place ,.main-character');
Sections.forEach((section)=>{
section_observer.observe(section);
})
*/

/* animation titre*/

const splitTextIntoSpans = (element) => {
  const text = element.innerText;
  const words = text.split(' ');
  element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
};

document.querySelectorAll('h2 div, h3').forEach(splitTextIntoSpans);

const section_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const words = entry.target.querySelectorAll('h2 div .word, h3 .word');
    if (entry.isIntersecting) {
      words.forEach((word, index) => {
        setTimeout(() => {
          word.classList.add('animation-titre');
        }, index * 100);
      });
      return;
    }
    words.forEach(word => word.classList.remove('animation-titre'));
  });
});

const Sections = document.querySelectorAll('.story, #studio, .story #place, .main-character');
Sections.forEach(section => section_observer.observe(section));


/*Swiper*/

/*const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  pagination: ".swiper-pagination",
  loop: true,
  loopedSlide : 2,
  loopAdditionalSlides : 1,


  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 20,
    modifier: 1,
    slideShadows: false,

  },
  slidesOffsetBefore: 300,
});*/
const swiper = new Swiper(".mySwiper", {
  direction: 'horizontal',
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 1000,
  autoplay: {
      delay: 1000,
      disableOnInteraction: false,
  },
  loop: true,
  loopedSlides: 2,
  loopAdditionalSlides: 1,
  effect: "coverflow",
  coverflowEffect: {
      slideShadows: false,
      rotate: 70,
      stretch: 0,
      depth: 50,
      modifier: 1,
  },
});