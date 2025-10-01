
// Mobile toggle
const btn = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');
if (btn) {
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
}

document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname; // e.g. "/klinik-website/priser/"
  const links = document.querySelectorAll('nav a');

  // Determine the current page
  let currentPage = path.split('/').filter(Boolean).pop(); // last segment
  if (!currentPage || currentPage === 'index.html') {
    currentPage = 'home'; // treat homepage as 'home'
  }

  links.forEach(link => {
    let href = link.getAttribute('href').replace(/\/$/, '');
    let linkPage = href.split('/').filter(Boolean).pop();
    if (!linkPage || linkPage === 'index.html') {
      linkPage = 'home';
    }

    if (linkPage === currentPage) {
      // Current page → highlight
      link.classList.add('bg-primary', 'text-white');
    } else {
      // Not current page → add hover underline
      link.classList.add('hover-underline');
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
