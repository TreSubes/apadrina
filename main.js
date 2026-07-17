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

});
