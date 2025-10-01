
// Mobile toggle
const btn = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');
if (btn) {
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
}

document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname; 
  const links = document.querySelectorAll('nav a');

  let currentPage = path.split('/').filter(Boolean).pop();
  if (!currentPage || currentPage === 'index.html') currentPage = 'home';

  links.forEach(link => {
    let href = link.getAttribute('href').replace(/\/$/, '');
    let linkPage = href.split('/').filter(Boolean).pop();
    if (!linkPage || linkPage === 'index.html') linkPage = 'home';

    if (linkPage === currentPage) {
      // Active link → show underline and primary color
      link.classList.add('text-primary', 'border-primary');
    } else {
      // Inactive → keep default border & color
      link.classList.remove('text-primary', 'border-primary');
    }
  });
});





//font styling
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Urbanist', 'sans-serif'],
        },
      }
    }
  }

//prim color
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary:'#758cb2'
        }
      }
    }
  }
