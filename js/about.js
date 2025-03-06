const details = document.querySelectorAll('.faq-question');
const sign = document.querySelectorAll('.item-sign');

details.forEach(function(detail, i) {
  detail.addEventListener('toggle', function() {
    if (detail.open) { 
        sign[i].textContent = '-';
        detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else {
        sign[i].textContent = '+';
    }
  });
});
