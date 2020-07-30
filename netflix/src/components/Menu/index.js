import React from 'react';
import Logo from '../../assets/img/erikaflix.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import {Button} from "../Button/index";

function Menu() {
    return (
       <nav className="Menu"> 
           <a href="/"> 
              <img className="Logo"  src={Logo} alt="logo"/>
           </a>
           <Button as="a" href="/">
               Novo vídeo
           </Button>
       </nav>
    )
};

export default Menu