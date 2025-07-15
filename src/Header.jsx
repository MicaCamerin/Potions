import { Link } from "react-router";
import { NavBar } from "./NavBar";


export function Header ({ }){ 
    return (
<header className="header">
    <h1 className="headerTitle"><Link to="./">Potions</Link></h1>
    <NavBar />
</header>
    )
}
