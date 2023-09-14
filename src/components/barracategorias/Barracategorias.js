import { NavLink } from "react-router-dom";
const Barracategorias = () => {
  const categories = ["Libros", "Cursos", "Juegos", "Servicios", "Kits", "otros"];

  return (
    <nav className="categories-bar">
      <ul>
        {categories.map((category) => (
          <ul>
            <li>
              <NavLink to={`/categoria/${category}`}>{category.toUpperCase()}</NavLink>
            </li>
          </ul>
        ))}
      </ul>
    </nav>
  );
};

export default Barracategorias;