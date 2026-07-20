/**
 * Base de refugios aliados.
 *
 * Cómo agregar un nuevo refugio:
 * 1. Copia uno de los bloques de abajo.
 * 2. Cambiale el identificador (la palabra antes de los dos puntos, ej. "huellitas").
 *    Debe ser único, sin espacios ni tildes.
 * 3. Este mismo identificador se usa en el campo "refugioId" de cada animal
 *    para conectarlo con su refugio.
 */

const refugiosDB = {

  huellitas: {
    id: 'huellitas',
    nombre: 'Refugio Huellitas',
    comuna: 'Maipú',
    descripcion: 'Refugio comunitario que rescata y cuida perros y gatos en situación de calle en Maipú.',
    logo: '', // nombre de archivo dentro de Imagenes/Refugios/, opcional
    colorPlaceholder: '#D9B38C',
  },

  'patitas-felices': {
    id: 'patitas-felices',
    nombre: 'Refugio Patitas Felices',
    comuna: 'Puente Alto',
    descripcion: 'Refugio familiar dedicado principalmente al rescate de cachorros y camadas abandonadas.',
    logo: '',
    colorPlaceholder: '#C9A87C',
  },

  'san-roque': {
    id: 'san-roque',
    nombre: 'Refugio San Roque',
    comuna: 'Ñuñoa',
    descripcion: 'Refugio de larga trayectoria en Ñuñoa, con foco en peludos adultos y de difícil adopción.',
    logo: '',
    colorPlaceholder: '#B08968',
  },

};

/**
 * Base de animales disponibles para apadrinar.
 *
 * Cómo agregar un nuevo animal:
 * 1. Copia uno de los bloques de abajo (desde "rocky:" hasta la coma final).
 * 2. Cambiale el identificador (la palabra antes de los dos puntos, ej. "luna").
 *    Debe ser único, sin espacios ni tildes (usa guiones si hace falta, ej. "luna-2").
 * 3. Completa cada campo con los datos reales del animal.
 * 4. El campo "refugioId" debe coincidir con el identificador de un refugio
 *    definido arriba en refugiosDB.
 * 5. Pon las fotos dentro de la carpeta Imagenes/Mascotas/ y escribe su nombre
 *    de archivo en el arreglo "imagenes" (la primera de la lista es la foto principal).
 * 6. Marca "destacado: true" en los animales que quieres que aparezcan en el
 *    carrusel del inicio (recomendado: mezclar perros y gatos, 4 a 6 en total).
 *
 * No hace falta tocar ningún otro archivo — index.html, refugios.html y
 * perfil-perro.html leen automáticamente todo lo que haya en este archivo.
 */

const animalesDB = {

  rocky: {
    id: 'rocky',
    nombre: 'Rocky',
    tipo: 'Perro',
    edad: '3 años',
    sexo: 'Macho',
    refugioId: 'huellitas',
    refugio: 'Refugio Huellitas',
    comuna: 'Maipú',
    gastoMensual: 28000,
    padrinosActivos: 3,
    mesesEnRefugio: 8,
    destacado: true,
    descripcion: 'Mestizo, 3 años, macho. Llegó al refugio hace 8 meses tras ser encontrado en la calle. Es juguetón, le encanta el sol de la tarde y todavía le tiene miedo a los ruidos fuertes. Está en proceso de sociabilización mientras busca, algún día, una familia.',
    // Nombres de archivo dentro de Imagenes/Mascotas/. La primera es la foto principal.
    imagenes: ['rocky-1.jpg'],
    colorPlaceholder: '#D9B38C', // se usa solo si todavía no hay foto real
  },

  mora: {
    id: 'mora',
    nombre: 'Mora',
    tipo: 'Perra',
    edad: '1 año',
    sexo: 'Hembra',
    refugioId: 'patitas-felices',
    refugio: 'Refugio Patitas Felices',
    comuna: 'Puente Alto',
    gastoMensual: 22000,
    padrinosActivos: 1,
    mesesEnRefugio: 4,
    destacado: true,
    descripcion: 'Cachorra rescatada junto a su camada. Es muy activa, le encanta jugar con otros peludos del refugio y está aprendiendo a caminar con correa. Ideal para una familia con energía.',
    imagenes: ['mora-1.jpg'],
    colorPlaceholder: '#C9A87C',
  },

  toby: {
    id: 'toby',
    nombre: 'Toby',
    tipo: 'Perro',
    edad: '5 años',
    sexo: 'Macho',
    refugioId: 'san-roque',
    refugio: 'Refugio San Roque',
    comuna: 'Ñuñoa',
    gastoMensual: 30000,
    padrinosActivos: 5,
    mesesEnRefugio: 14,
    destacado: true,
    descripcion: 'Toby es tranquilo, cariñoso y perfecto para casas con niños. Lleva más de un año en el refugio y sueña con encontrar un sillón propio donde dormir la siesta.',
    imagenes: ['toby-1.jpg'],
    colorPlaceholder: '#B08968',
  },

  luna: {
    id: 'luna',
    nombre: 'Luna',
    tipo: 'Perra',
    edad: '2 años',
    sexo: 'Hembra',
    refugioId: 'huellitas',
    refugio: 'Refugio Huellitas',
    comuna: 'Maipú',
    gastoMensual: 25000,
    padrinosActivos: 1,
    mesesEnRefugio: 6,
    destacado: true,
    descripcion: 'Luna es curiosa y muy leal. Le encanta acompañar a los voluntarios en sus rondas por el refugio y responde súper bien a los premios.',
    imagenes: ['luna-1.jpg'],
    colorPlaceholder: '#E0C097',
  },

};
