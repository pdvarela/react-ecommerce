import { NavLink } from "react-router-dom";
import "./barraCategorias.css";
const Barracategorias = () => {
  const categories = ["Libros", "Cursos", "Juegos", "Servicios", "Kits", "Otros"];

  return (
    <nav className="categories-bar">
      
        {categories.map((category,index) => (
          <ul key={index}>
            <li>
              <NavLink to={`/categoria/${category}`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>{category.toUpperCase()}  </NavLink>
            </li>
          </ul>
        ))}
      
    </nav>
  );
};

export default Barracategorias;