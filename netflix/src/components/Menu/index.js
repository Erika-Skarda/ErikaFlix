import React from 'react';
import Logo from '../../assets/img/erikaflix.png';
import './menu.css';
import { Link } from 'react-router-dom'
//import ButtonLink from './components/ButtonLink';
import { Button } from "../Button/index";

function Menu() {
    return (
       <nav className="Menu"> 
           <Link to ="/"> 
              <img className="Logo"  src={Logo} alt="logo"/>
           </Link>

           <Button as= { Link } className="ButtonLink" to="/cadastro/video">
               Novo vídeo
           </Button>
       </nav>
    )
};

export default Menu