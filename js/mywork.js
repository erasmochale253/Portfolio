const template = document.getElementById("work-template");

function gallery() {
    
    for (let i = 1; i <= 9; i++) {
        // Clone the template content inside the loop
        const clone = template.content.cloneNode(true);

        // Use a class instead of an id to avoid conflicts
        clone.querySelector(".img").src = `./img/gallery/${i}-500.jpg`;

        // Append to the container
        document.getElementById("container").appendChild(clone);
    }

    console.log("mywork.js is loaded");

}

document.addEventListener("DOMContentLoaded", gallery);