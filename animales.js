/**
 * Base de animales disponibles para apadrinar.
 *
 * Cómo agregar un nuevo animal:
 * 1. Copia uno de los bloques de abajo (desde "rocky:" hasta la coma final).
 * 2. Cambiale el identificador (la palabra antes de los dos puntos, ej. "luna").
 *    Debe ser único, sin espacios ni tildes (usa guiones si hace falta, ej. "luna-2").
 * 3. Completa cada campo con los datos reales del animal.
 * 4. Pon las fotos dentro de la carpeta Imagenes/Mascotas/ y escribe su nombre
 *    de archivo en el arreglo "imagenes" (la primera de la lista es la foto principal).
 *
 * No hace falta tocar ningún otro archivo — index.html y perfil-perro.html
 * leen automáticamente todo lo que haya en este archivo.
 */

const animalesDB = {

  rocky: {
    id: 'rocky',
    nombre: 'Rocky',
    tipo: 'Perro',
    edad: '3 años',
    sexo: 'Macho',
    refugio: 'Refugio Huellitas',
    comuna: 'Maipú',
    gastoMensual: 28000,
    padrinosActivos: 3,
    mesesEnRefugio: 8,
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
    refugio: 'Refugio Patitas Felices',
    comuna: 'Puente Alto',
    gastoMensual: 22000,
    padrinosActivos: 1,
    mesesEnRefugio: 4,
    descripcion: 'Cachorra rescatada junto a su camada. Es muy activa, le encanta jugar con otros perros y está aprendiendo a caminar con correa. Ideal para una familia con energía.',
    imagenes: ['mora-1.jpg'],
    colorPlaceholder: '#C9A87C',
  },

  toby: {
    id: 'toby',
    nombre: 'Toby',
    tipo: 'Perro',
    edad: '5 años',
    sexo: 'Macho',
    refugio: 'Refugio San Roque',
    comuna: 'Ñuñoa',
    gastoMensual: 30000,
    padrinosActivos: 5,
    mesesEnRefugio: 14,
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
    refugio: 'Refugio Huellitas',
    comuna: 'Maipú',
    gastoMensual: 25000,
    padrinosActivos: 1,
    mesesEnRefugio: 6,
    descripcion: 'Luna es curiosa y muy leal. Le encanta acompañar a los voluntarios en sus rondas por el refugio y responde súper bien a los premios.',
    imagenes: ['luna-1.jpg'],
    colorPlaceholder: '#E0C097',
  },

};
