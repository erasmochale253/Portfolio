const template = document.getElementById("work-template");
const originalImg = document.querySelector("#container-view-2 img");
const imgViewer = document.getElementById("img-view");
const closeImgViewer = document.querySelector(".close");

function gallery() {
    
    for (let i = 1; i <= 9; i++) {
        // Clone the template content inside the loop
        const clone = template.content.cloneNode(true);

        // Use a class instead of an id to avoid conflicts
        clone.querySelector(".img").src = `./img/gallery/${i}-500.jpg`;

        // Append to the container
        clone.querySelector(".work-container").addEventListener("click", () => {
            originalImg.src = `/img/gallery/${i}.jpg`;
            imgViewer.style.transform = "scale(100%)";
        });
        document.getElementById("container").appendChild(clone);
    }
    
    closeImgViewer.addEventListener("click", ()=>{
        imgViewer.style.transform = "scale(0%)";

    });

    console.log("mywork.js is loaded");

}

document.addEventListener("DOMContentLoaded", gallery);