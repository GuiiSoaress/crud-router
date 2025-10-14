import React from "react";
import { Link } from "react-router-dom";
//import "./NavBar.css";

function NavBar({onLogout}){

    return (
        <nav className="nav">
            <h2>Agenda </h2>
            <ul>
                <li>Home</li>
                <li>Cadastrar</li>
                <li>Listar Contatos</li>
                <li>Sair</li>
            </ul>
        </nav>
    )
}

export default NavBar;