
const observer_titre = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     
      const titre = entry.target.querySelector('.section-title');
    
      if(entry.isIntersecting) {
        
        titre.classList.add('animation-titre');
        return;
      }
      titre.classList.remove('animation-titre');
    });
  });
  
  observer_titre.observe(document.querySelector('.titre-wrapper'));
  

  const observer_studio = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     
      const studio_titre = entry.target.querySelector('.studio-title');
    
      if(entry.isIntersecting) {
  
        studio_titre.classList.add('animation-titre');
        return;
      }
      studio_titre.classList.remove('animation-titre');
    });
  });
  
  observer_studio.observe(document.querySelector('.studio-wrapper'));
  