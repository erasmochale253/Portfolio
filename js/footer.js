// footer.js


function footerTemplate(){
    const footer = document.getElementById("footer");
    let dateYear = new Date().getFullYear();
    footer.innerHTML = `<div id="policies">
                <a href="#">Privacy</a>
                <a href="#">Terms of Use</a>
            </div>
            <div id="social-links">
                <a href="#"><img src="./img/Social Media Icon/Twitter.svg" alt="Twitter"></a>
                <a href="#"><img src="./img/Social Media Icon/Pinterest.svg" alt="Pinterest"></a>
                <a href="#"><img src="./img/Social Media Icon/Behance.svg" alt="Behance"></a>
                <a href="#"><img src="./img/Social Media Icon/Linkedin.svg" alt="linkedin"></a>
                <a href="#"><img src="./img/Social Media Icon/Dribble.svg" alt="linkedin"></a>
            </div>
            <p>Christopher, &copy; ${dateYear} All Rights Reserved.</p>`
}

console.log("footer.js is connected");
document.addEventListener('DOMContentLoaded', footerTemplate())