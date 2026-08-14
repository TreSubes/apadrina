document.addEventListener('DOMContentLoaded', () => {

  /**
   * Carga un componente HTML (header/footer) desde un archivo
   * y lo inserta donde esté el placeholder correspondiente.
   * Así el header y el footer viven en un solo archivo cada uno
   * y se actualizan en todas las páginas a la vez.
   */
  const loadComponent = (url, placeholderId) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Error al cargar ${url}: ${response.statusText}`);
        return response.text();
      })
      .then((data) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
          placeholder.outerHTML = data;
        }
      });
  };

  /**
   * Activa el botón de menú hamburguesa en mobile.
   * Se llama recién después de que el header se inyectó en el DOM.
   */
  const initializeMobileMenu = () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('nav-links');
    if (!menuButton || !navLinks) return;

    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Cierra el menú al hacer clic en un link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  };

  Promise.all([
    loadComponent('header.html', 'header-placeholder'),
    loadComponent('footer.html', 'footer-placeholder'),
  ])
    .then(() => {
      initializeMobileMenu();
    })
    .catch((error) => {
      console.error('Error al cargar header/footer:', error);
    });

  /**
   * Animación de aparición al hacer scroll ("scroll reveal").
   * Cualquier elemento con la clase "reveal" empieza invisible y desplazado
   * un poco hacia abajo, y aparece suavemente cuando entra en pantalla.
   * Si el navegador no soporta IntersectionObserver, se muestra todo de inmediato.
   */
  const initializeScrollReveal = () => {
    const elementos = document.querySelectorAll('.reveal');
    if (!elementos.length) return;

    // Le asigna a cada hijo directo de grids/carruseles un índice para el efecto cascada
    // (ver la variable --reveal-index en style.css).
    elementos.forEach((el) => {
      const hijos = el.querySelectorAll(':scope > .grid > *, :scope > .carrusel-track > *, :scope > .pasos-emocion > *, :scope.grid > *, :scope.carrusel-track > *, :scope.pasos-emocion > *');
      hijos.forEach((hijo, i) => hijo.style.setProperty('--reveal-index', i));
    });

    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    elementos.forEach((el) => observer.observe(el));
  };

  initializeScrollReveal();

});
