document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de animação de hover
     document.querySelectorAll('a').forEach(link => {
          link.addEventListener('mouseover', () => {
             link.style.transition = 'color 0.3s ease';
             link.style.color = 'var(--md-accent-fg-color)';
          });
           link.addEventListener('mouseout', () => {
              link.style.color = 'initial';
           });
     });
     const tocButton = document.querySelector('.md-sidebar--secondary h2');
     if (tocButton) {
         const tocList = tocButton.nextElementSibling;
         tocList.style.display = 'none';

     tocButton.addEventListener('click', function() {
          if (tocList.style.display === 'none') {
            tocList.style.display = 'block';
          } else {
            tocList.style.display = 'none';
        }
      });
     }
});