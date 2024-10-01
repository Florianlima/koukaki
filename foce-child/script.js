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



// Nuages




const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const smallCloud = entry.target.querySelector('.small_cloud');
      const bigCloud = entry.target.querySelector('.big_cloud');

      const handleScroll = () => {
        const scrollPosition = window.scrollY - entry.target.offsetTop;
        const translateValue = Math.min(scrollPosition, 300);

        smallCloud.style.transform = `translateX(${-translateValue}px)`;
        bigCloud.style.transform = `translateX(${-translateValue}px)`;
      };

      window.addEventListener('scroll', handleScroll);

      
      entry.target.addEventListener('mouseleave', () => {
        window.removeEventListener('scroll', handleScroll);
      });

      
      smallCloud.style.transform = 'translateX(0px)';
      bigCloud.style.transform = 'translateX(0px)';
    }
  });
}, { threshold: 0.1 });

observer.observe(document.querySelector('.cloud-wrapper'));


// Menu Burger

document.addEventListener('DOMContentLoaded', function () {
  // Sélection des éléments bouton du menu burger et menu fullscreen
  const menuBurger = document.querySelector('.burgerBtn');
  const fullscreenMenu = document.querySelector('.fullscreenMenu');

  // Ajout d'un écouteur d'événement click au bouton de menu burger
  menuBurger.addEventListener('click', function () {
      // Ajout de la classe 'active' pour animer le bouton de menu burger
      menuBurger.classList.toggle('active');

      // Ajout de la classe 'open' pour afficher ou masquer le menu fullscreen
      fullscreenMenu.classList.toggle('open');
  });
});




// Apparition lien menu 

document.addEventListener('DOMContentLoaded', function () {
  const menuBurger = document.querySelector('.burgerBtn');
  const fullscreenMenu = document.querySelector('.fullscreenMenu');

  menuBurger.addEventListener('click', function () {
      // Sélection des éléments menu fullscreen et tous les liens du menu
      const menuLinks = fullscreenMenu.querySelectorAll('ul li a');

      // Ajout de la classe 'titleAnimation' à chaque lien du menu
      menuLinks.forEach((link) => {
          link.classList.add('titleAnimation');
      });

      // Déclenchement de l'animation avec un délai
      setTimeout(() => {
          menuLinks.forEach((link, index) => {
              const delay = index === 0 ? 400 : index * 600;

              // Ajout de la classe 'visibility' avec le délai spécifié
              setTimeout(() => {
                  link.classList.add('visibility');
              }, delay);
          });
      }, 150);
  });
});