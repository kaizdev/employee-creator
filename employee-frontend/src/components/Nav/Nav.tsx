import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Employees</NavLink>
            <NavLink to="/add-employee">Add Employees</NavLink>
        </nav>
    );
};
export default Nav;
