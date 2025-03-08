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
                        <img src="./img/close-1.svg" alt="close">
                    </button>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="./index.html">HOME</a>
                            <div class="bottom-line"></div>
                        </li>
                        <li>
                            <a href="mywork.html">MY WORK</a>
                            <div class="bottom-line"></div>
                        </li>
                        <li>
                            <a href="testimonial.html">TESTIMONIALS</a>
                            <div class="bottom-line"></div>
                        </li>
                        <li>
                            <a href="about.html">ABOUT ME</a>
                            <div class="bottom-line"></div>
                        </li>
                    </ul>
                </nav>
                
            </div>

            <a id="logo-home" href="./index.html">
                <img src="./img/logo.svg" alt="logo">
             </a>

            <button id="menu-humb">
                <img src="./img/menu.svg" alt="menu">
            </button>`;
}
console.log("header-2.js is connected");
document.addEventListener('DOMContentLoaded', headerTemplate())