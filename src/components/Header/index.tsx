import React from "react";
import { HeaderContainer,Fundo,Logo,LinkRestaurants,TextCart } from "./styles";
import logo from '../../assets/images/logo.svg'
import Vector from '../../assets/images/Vector.svg'

const Header = () =>{
    <HeaderContainer>
        <Fundo src={Vector} alt="Fundo"/>
        <nav>
            <LinkRestaurants>
            <li>
                <a href="#">Restaurantes</a>
            </li>
            </LinkRestaurants>
        </nav>
        
        <Logo src={logo}  alt="Logo" />
        <TextCart>
            <a href="#">
            0 produto(s) no carrinho
            </a>
        </TextCart>
    </HeaderContainer>
}

export default Header;

