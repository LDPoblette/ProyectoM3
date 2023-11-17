import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/LogoCDLand.jpg"
import { NavLayout } from "./styles";
import{ Btn } from "../UI/Button/Button"

function NavBar() {
    return(
        <>
            <NavLayout>
                <a href="../../pages/Home/Home.jsx">
                    <img src={Logo} alt="Logo"/>
                </a>

                <ul>
                    <li>
                        <Link className="hola" to="/home">Inicio</Link>
                    </li>

                    <li>
                        <Link className="hola" to="/inventory">Buscar disco</Link>
                    </li>

                    <li>
                        <Link to="/login">
                            <Btn>Firmarse</Btn>
                        </Link>
                    </li>
                </ul>
            </NavLayout>
        </>
    )
}

export default NavBar;