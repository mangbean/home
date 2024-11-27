
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    video.muted = true;
    video.play().catch(error => {
        console.error("Autoplay prevented:", error);
    });
   });

// Get the Explore button and Tikman section
 const exploreButton = document.getElementById('explore-button');
 const tikmanSection = document.getElementById('carousel');
 
 // Add click event to the Explore button
 exploreButton.addEventListener('click', function(event) {
  tikmanSection.scrollIntoView({ behavior: 'smooth' });
 });



nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}

document.addEventListener("DOMContentLoaded", () => {
    // Select all the items
    const items = document.querySelectorAll(".item");

    // Loop through items starting from the 3rd
    items.forEach((item, index) => {
        if (index >= 2) { // Start from the 3rd item (0-indexed)
            const title = item.querySelector(".title");
            const description = item.querySelector(".des");

            // Check if title or description is being displayed
            if (title && description) {
                const titleStyles = getComputedStyle(title);
                const descriptionStyles = getComputedStyle(description);

                // Hide if not displayed
                if (titleStyles.display === "none" || descriptionStyles.display === "none") {
                    title.style.display = "none";
                    description.style.display = "none";
                }
            }
        }
    });
});

gsap.fromTo('.preloader', {opacity:1},{
    opacity:0,
    duration:1.5,
    delay:3.5,
    onComplete: () => {
        document.querySelector(".preloader-bg").remove();
      }
})
