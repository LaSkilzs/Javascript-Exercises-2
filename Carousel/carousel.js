// Function Show
alert("Page Loaded");

let currentSlide = 1;
function showSlide(slideIndex) {
    const slides = document.getElementsByClassName('carousel');
    
    // edge cases
    if(slideIndex > slides.length) { currentSlide = 1}
    if(slideIndex < 1 ) {currentSlide = slides.length }

    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    slides[currentSlide - 1].style.display = 'flex'
}

// Function  Next
    function previousSlide() {
      // complete the following function
    }


// Function Prev
    function nextSlide() {
       // complete the following function
    }


    showSlide(currentSlide);
    
   