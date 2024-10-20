/*==================== toggle icon navbar ====================*/
let navbar = document.querySelector('.navbar');
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/* Theme Dark */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Guardar la preferencia del tema en localStorage
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Mantener la preferencia del tema cuando recargue la página
window.addEventListener('load', () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        themeToggle.checked = true;
        body.classList.add('dark-mode');
    } else {
        themeToggle.checked = false;
        body.classList.remove('dark-mode');
    }
});

/*==================== scroll reveal ====================*/

const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    //reset: true
});
sr.reveal(`.home-content, .heading `, {
    origin: 'top',
    interval: 100
});

sr.reveal(`.home-img, .services-container, .portfolio-box, .contact form`, {
    origin: 'bottom',
    interval: 100
});

sr.reveal(`.home-content h1, .about-img`, {
    origin: 'h1',
    interval: 100
});

sr.reveal(`.home-content p, .about-content`, {
    origin: 'h1',
    interval: 100
});

/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== open image ====================*/
// Obtener el modal
var modal = document.getElementById("imageModal");

// Obtener la imagen dentro del modal
var modalImg = document.getElementById("modalImage");

// Función para abrir el modal al hacer clic en el ícono
function openImage(element) {
  var imgSrc = element.parentElement.previousElementSibling.src;
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

// Obtener el elemento <span> que cierra el modal
var closeModal = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en <span> (x), se cierra el modal
closeModal.onclick = function() { 
  modal.style.display = "none";
}

// También puedes cerrar el modal haciendo clic en cualquier parte fuera de la imagen
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*==================== EmailJS integration ====================*/
(function() {
    // Inicializar EmailJS con tu user ID
    emailjs.init("nXENJ4GfmZFzLKlbj");
  
    // Seleccionar el formulario de contacto
    const contactForm = document.getElementById('contact-form');
  
    // Escuchar el evento de envío del formulario
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto
  
      console.log('Formulario enviado'); // Para verificar que se está enviando el formulario
  
      // Recoger los datos del formulario
      const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
      };
  
      console.log('Template Params:', templateParams); // Para verificar los datos recogidos
  
      // Enviar el correo usando EmailJS
      console.log('Enviando correo...'); // Para verificar que se está llamando a la función de envío
      emailjs.send("service_a6hoc0i", "template_tt85pvm", templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert("¡Tu mensaje ha sido enviado con éxito!");
          contactForm.reset(); // Opcional: reiniciar el formulario después del envío
        }, function(error) {
          console.error('FAILED...', error);
          alert("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.");
        });
    });
  })();
