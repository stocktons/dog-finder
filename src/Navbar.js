import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import { NavLink } from "react-router-dom";

/** docstring!!! */

export default function Navbar({ dogs }) {
    return (
        <nav className="NavBar">
          {dogs.map(dog => <NavLink exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink>)}
        </nav>
      );
}

