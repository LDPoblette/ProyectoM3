import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/LogoCDLand.jpg"
import { NavLayout } from "./styles";
import{ Btn } from "../UI/Button/Button"
import AuthContext from "../../contexts/AuthContext";

function NavBar() {

    const authContext = useContext(AuthContext);

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
                            <Btn onClick={authContext.onLogout}>
                                {authContext.isLoggedIn ? 'Salir' : 'Firmarse'}
                            </Btn>
                        </Link>
                    </li>
                </ul>
            </NavLayout>
        </>
    )
}

export default NavBar;