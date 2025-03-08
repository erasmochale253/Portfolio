const header = document.querySelector('.header');
// Define a media query
const mediaQuery = window.matchMedia("(min-width: 1024px)");
const mediaQuerySmall = window.matchMedia("(max-width: 1024px)");


window.addEventListener('scroll', function(){
    if(mediaQuery.matches){
        if(window.pageYOffset >= 80){

            header.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
            header.style.width = '100%'
        }
        else{
            header.style.boxShadow = 'none';
            header.style.width = '55%'
        }
    }else if(mediaQuerySmall.matches){
        if(window.pageYOffset >= 100){

            header.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
            console.log("media is smaller than 1024px 23")
        }
        else{
            header.style.boxShadow = 'none';
        }
    }
});



// Function to handle media query changes
function handleMediaChange(event) {
    if (event.matches) {
        console.log("Screen is 1024px or larger");
    } else {
        console.log("Screen is smaller than 1024px");
    }
}

// Add event listener for media query changes
mediaQuery.addEventListener("change", handleMediaChange);

// Run once on page load
handleMediaChange(mediaQuery);
