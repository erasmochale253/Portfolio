// footer.js

const headMenu = document.getElementById("menu-bar");

function headerTemplate(){
    headMenu.innerHTML = `
            <div class="nav-menu">
                <div class="close-btn">
                    <div id="logo">
                    <a href="./index.html">
                        <img src="./img/logo.svg" alt="logo">
                    </a>
                    </div>
                    <button id="close-btn" type="button">
                        <img src="./img/_close.svg" alt="close">
                    </button>
                </div>
                <nav>
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="mywork.html">My Work</a></li>
                        <li><a href="testimonial.html">Testimonials</a></li>
                        <li><a href="about.html">About Me</a></li>
                    </ul>
                </nav>
                
            </div>

            <a href="./index.html">
                <img src="./img/logo.svg" alt="logo">
             </a>

            <button id="menu-humb">
                <img src="./img/menu.svg" alt="menu">
            </button>`;
}
console.log("header-2.js is connected");
document.addEventListener('DOMContentLoaded', headerTemplate())