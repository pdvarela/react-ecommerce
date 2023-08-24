const Barracategorias = () => {
  const categories = ["Libros", "Cursos", "Juegos", "servicios"];

  return (
    <nav className="categories-bar">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Barracategorias;