const header = document.querySelector('.header');


window.addEventListener('scroll', function(){
    if(window.pageYOffset >= 100){
        header.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        console.log('header-with-shadow');
    }
    else{
        header.style.boxShadow = 'none';
        console.log('header-without-shadow');
    }
});