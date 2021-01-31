import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        RightRecipes
                    </NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/recipes">Recipes</NavLink>
                </nav>
            </div>
        </header>
    );
}
