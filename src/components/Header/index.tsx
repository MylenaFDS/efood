import React from "react";
import { HeaderContainer,Fundo,Logo,TermRestaurants,TextCart } from "./styles";
import logoImage from '../../assets/images/logo.svg'
import Vector from '../../assets/images/Vector.svg'

const Header = ()=>{
    <HeaderContainer>
        <Fundo src={Vector} alt="Fundo"/>
        <TermRestaurants>Restaurantes</TermRestaurants>
        <Logo src={logoImage}  alt="Logo" />
        <TextCart>0 produto(s) no carrinho</TextCart>
    </HeaderContainer>
}

export default Header

