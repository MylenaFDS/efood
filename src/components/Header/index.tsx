import React from "react";
import { HeaderContainer,Fundo,Logo,LinkRestaurants,TextCart } from "./styles";
import logo from '../../assets/images/logo.svg'
import Vector from '../../assets/images/Vector.svg'
import { Link } from "react-router-dom";

const Header: React.FC = () =>{
    return <HeaderContainer>
        <Fundo src={Vector} alt="Fundo" />
        <nav>
            <LinkRestaurants>
                <Link to="/home">Restaurantes</Link>
                
            </LinkRestaurants>
        </nav>

        <Logo src={logo} alt="Logo" />
        <TextCart>
            <a href="#">
                0 produto(s) no carrinho
            </a>
        </TextCart>
    </HeaderContainer>;
}

export default Header;

