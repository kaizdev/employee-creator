import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="flex flex-row justify-around">
                <NavLink
                    to="/"
                    className=" bg-purple-600 rounded-full bg-purple w-40 text-white"
                >
                    Employees
                </NavLink>
                <NavLink
                    to="/add-employee"
                    className="bg-purple-600 rounded-full bg-purple w-40 text-white"
                >
                    Add Employees
                </NavLink>
            </div>
            <br />
        </nav>
    );
};
export default Nav;
