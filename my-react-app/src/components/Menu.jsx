import { Link } from "react-router-dom"
export function Menu() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/TaskPage"}>Tareas</Link>
                </li>
                <li>
                    <Link to="/AboutUs">Sobre Nosotros</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}