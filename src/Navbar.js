import { NavLink } from "react-router-dom";

export default function Navbar({ dogs }) {
    return (
        <nav className="NavBar">
          {dogs.map(dog => <NavLink exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink>)}
        </nav>
      );
}

