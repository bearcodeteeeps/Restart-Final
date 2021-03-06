import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
    );
}

export default Navigation;