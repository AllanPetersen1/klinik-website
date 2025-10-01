
// Mobile toggle
const btn = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');
if (btn) {
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
}

// Active page highlight
document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname;
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '');
    const currentPath = path.replace(/\/$/, '');
    if (href === currentPath) {
      link.classList.add('bg-primary', 'text-white');
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
