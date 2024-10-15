import React from "react";
import { HeaderContainer, HeaderContent, Fundo, Logo, LinkRestaurants, TextCart } from "./styles";
import logo from '../../assets/images/logo.svg';
import Vector from '../../assets/images/Vector.svg';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Fundo src={Vector} alt="Fundo" />
      <HeaderContent>
        <LinkRestaurants>
          <Link to="/">Restaurantes</Link>
        </LinkRestaurants>
        
        <Logo src={logo} alt="Logo" />
        
        <TextCart>
          <a href="#">0 produto(s) no carrinho</a>
        </TextCart>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;


