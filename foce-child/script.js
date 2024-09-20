const section_observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    
     const titre = entry.target.querySelector('h2 div');
    
     if(entry.isIntersecting) {
       
       titre.classList.add('animation-titre');
       return;
     }
     titre.classList.remove('animation-titre');
   });
   
 });
const Sections= document.querySelectorAll('.story ,#studio');
Sections.forEach((section)=>{
section_observer.observe(section);
})

