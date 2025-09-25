const nav = document.getElementById('navbar');

function onScroll() {
  if (window.scrollY > 50) {
    nav.classList.add('shrink');
  } else {
    nav.classList.remove('shrink');
  }
}

window.addEventListener('scroll', onScroll);
onScroll(); // run once on load







// ===== Scroll Animation for About Section (Continuous) =====
document.addEventListener("DOMContentLoaded", () => {
  const introEls = document.querySelectorAll(".intro-animate");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");   // show when visible
      } else {
        entry.target.classList.remove("in-view"); // remove when out of view
      }
    });
  }, { threshold: 0.2 });

  introEls.forEach(el => io.observe(el));
});


// timeline.js
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-content");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view"); // add reveal class
      } else {
        entry.target.classList.remove("in-view"); // remove if you want repeat animation
      }
    });
  }, { threshold: 0.2 }); // trigger when 20% visible

  items.forEach(item => observer.observe(item));
});


document.addEventListener("DOMContentLoaded", () => {
  const progresses = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const bar = entry.target;
      if (entry.isIntersecting) {
        // When visible → fill bar
        bar.style.width = bar.getAttribute("data-width");
      } else {
        // When leaving viewport → reset back to 0
        bar.style.width = "0";
      }
    });
  }, { threshold: 0.5 }); // trigger when 50% visible

  progresses.forEach(bar => {
    observer.observe(bar);
  });
});



// Wait until the page content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab all the skill cards
  const cards = document.querySelectorAll(".skill-card");

  // Set up the observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the .visible class when card is in view
        entry.target.classList.add("visible");
        // Optional: remove comment below if you want animation only once
        // observer.unobserve(entry.target);
      } else {
        // Remove .visible when card goes out of view (so it re-animates)
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.2 }); // trigger when 20% of card is visible

  // Observe each card
  cards.forEach(card => observer.observe(card));
});



const boxes = document.querySelectorAll(".projectbox");    // this will search the html file look for class(.project-box) and put it in the const (boxex) we an give any name

const observer = new IntersectionObserver(
  
  (entries) => {
 
  entries.forEach(entry => {

   if(entry.isIntersecting){

      entry.target.classList.add("show");
   } 
   else{
        entry.target.classList.remove("show");
   }
  });
}

);
boxes.forEach(ol => observer.observe(ol));



const heavy = document.querySelectorAll(".but a");

const observerr = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting)
      {

          entry.target.classList.add("up");
      }
      else{

        entry.target.classList.remove("up");
      }

    });
  });


  heavy.forEach(lol => observerr.observe(lol));




    
