
const misProductos = [
  {
    nombre: "Libro de desarrollo personal",
    id: "1",
    categoria: "Libros",
    precio: 29.99,
    imagen: "https://picsum.photos/id/101/400/253",
    descripcion:
      "Un libro que te guiará en tu camino hacia el crecimiento personal y te ayudará a descubrir tu verdadero potencial.",
  },
  {
    nombre: "Curso de coaching por valores",
    id: "2",
    categoria: "Cursos",
    precio: 149.99,
    imagen: "https://picsum.photos/id/102/399/252",
    descripcion:
      "Aprende las técnicas y herramientas del coaching por valores para alcanzar tus metas y vivir una vida más plena y significativa.",
  },
  {
    nombre: "Juego de mesa sobre valores",
    id: "3",
    categoria: "Juegos",
    precio: 39.99,
    imagen: "https://picsum.photos/id/103/398/250",
    descripcion:
      "Diviértete mientras aprendes sobre valores importantes como la honestidad, el respeto y la empatía, a través de este juego de mesa educativo.",
  },
  {
    nombre: "Camisa con mensaje inspirador",
    id: "4",
    categoria: "Otros",
    precio: 19.99,
    imagen: "https://picsum.photos/id/104/399/251",
    descripcion:
      "Viste con estilo y transmite un mensaje inspirador con esta camisa que te recordará la importancia de vivir de acuerdo a tus valores.",
  },
  {
    nombre: "Taza motivacional",
    id: "5",
    categoria: "Otros",
    precio: 9.99,
    imagen: "https://picsum.photos/id/110/400/251",
    descripcion:
      "Empieza tus mañanas con una dosis de motivación con esta taza que te inspirará a perseguir tus sueños y alcanzar tus metas.",
  },
  {
    nombre: "Kit de meditación",
    id: "6",
    categoria: "Kits",
    precio: 49.99,
    imagen: "https://picsum.photos/id/106/401/251",
    descripcion:
      "Encuentra la calma y la serenidad en tu vida diaria con este kit de meditación que incluye todo lo que necesitas para practicar la meditación y cultivar la paz interior.",
  },
  {
    nombre: "Libro de autoayuda",
    id: "7",
    categoria: "Libros",
    precio: 19.99,
    imagen: "https://picsum.photos/id/107/401/250",
    descripcion:
      "Un libro que te ayudará a superar tus retos y alcanzar tus objetivos.",
  },
  {
    nombre: "Curso de desarrollo personal",
    id: "8",
    categoria: "Cursos",
    precio: 99.99,
    imagen: "https://picsum.photos/id/108/400/249",
    descripcion:
      "Aprende las habilidades y herramientas que necesitas para crecer como persona.",
  },
  {
    nombre: "Juego de mesa de desarrollo personal",
    id: "9",
    categoria: "Juegos",
    precio: 29.99,
    imagen: "https://picsum.photos/id/109/400/250",
    descripcion:
      "Diviértete mientras aprendes sobre ti mismo y sobre tus valores.",
  },
  {
    nombre: "Kit de desarrollo personal",
    id: "10",
    categoria: "Kits",
    precio: 49.99,
    imagen: "https://picsum.photos/id/110/400/251",
    descripcion:
      "Obtén todo lo que necesitas para empezar tu viaje de desarrollo personal.",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 1500);
  });
};

export const getProductByID = (id) => {
  return new Promise ( resolve => {
    setTimeout(() => {
        const producto = misProductos.find(prod => prod.id === id);
        resolve(producto);
    }, 1500);
  })
}

export const getProductByCategory = (categoria) => {
  return new Promise ( resolve => {
    setTimeout (() => {
      const productosCategoria = misProductos.filter(prod => prod.categoria === categoria);
      resolve(productosCategoria)
    },1500)
  })

}
