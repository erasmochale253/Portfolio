const testimonialTemplate = document.querySelector('.testi-template');
const testimonialContainer = document.querySelector('.testimonials-container');


function testimonial(){

    const testiName = [' Marcio Delgar', ' Pedro De Asis', 'Claudia Margalhas'];
    const testiProfession = ['Architeture', 'Web Designer', 'Web Developer'];


    for(let i = 0; i < testiName.length; i++){
        const clone = testimonialTemplate.content.cloneNode(true);
        clone.querySelector('.testi-img').src = `./img/testimonials/testimonial-${i}.jpg`;
        clone.querySelector('.testi-name').textContent = `${testiName[i]}`;
        clone.querySelector('.testi-profession').textContent = `${testiProfession[i]}`;
        testimonialContainer.appendChild(clone);
    }

    const slider = document.querySelector('.testimonials-container');
    const slides = document.querySelectorAll('.testimonials-container .testimonial');
    const totalSlides = testiName.length;
    const inputs = document.querySelectorAll('.cont-2-testimonials input');
    let index = 0; // Track current slide
    
    let sliderInterval = setInterval(moveNextSlide, 10000); // Auto-slide every 10s
    
    const firstSlide = slides[0].cloneNode(true); // Clone first slide
    slider.appendChild(firstSlide); // Duplicate first slide for infinite loop

    inputs.forEach((input, i) => {
        input.addEventListener('change', () => {
            clearInterval(sliderInterval); // Reset interval when manually selecting
            index = i;
            updateSlide();
            sliderInterval = setInterval(moveNextSlide, 10000); // Restart auto-slide
        });
    });

    function moveNextSlide() {
        index++; // Move to the next slide
        // index = (index + 1) % totalSlides;
        updateSlide();
    }

    function updateSlide() {
        slider.style.transition = "transform 1s ease"; // Set transition for smooth effect
        slider.style.transform = `translateX(-${(index * 100)}%)`;
        
        if (index === totalSlides) {
            inputs[0].checked = true; // Set first radio input to checked
        } else {
            inputs[index].checked = true; // Set radio input to checked
        }
        
        // After animation ends, check if the slider is at the end
        setTimeout(() => {
            if (index === totalSlides) {
                // Reset the slider to the first slide (without visible jump)
                slider.style.transition = "none"; // Disable transition temporarily
                slider.style.transform = 'translateX(0)';// Instantly jump to first slide
                index = 0; // Reset index
                setTimeout(() => {
                    slider.style.transition = "transform 1s ease"; // Re-enable smooth transition
                }, 50);
            }
        }, 1000); // Wait for the transition to finish
    }

}
console.log('testimonial.js is loaded');

document.addEventListener('DOMContentLoaded', testimonial);