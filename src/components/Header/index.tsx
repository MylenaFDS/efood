import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HeaderContainer, HeaderContent, Fundo, Logo, LinkRestaurants, TextCart } from "./styles";
import logo from '../../assets/images/logo.svg';
import Vector from '../../assets/images/Vector.svg';
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import Cart from "../Cart";

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar a abertura do carrinho
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Fundo src={Vector} alt="Fundo" />
        <HeaderContent>
          <LinkRestaurants>
            <Link to="/">Restaurantes</Link>
          </LinkRestaurants>

          <Logo src={logo} alt="Logo" />

          <TextCart onClick={toggleCart}> {/* Adicione onClick ao TextCart */}
            {cartItems.length} produto(s) no carrinho
          </TextCart>
        </HeaderContent>
      </HeaderContainer>

      {isCartOpen && <Cart onClose={closeCart} />} {/* Renderiza o carrinho quando isCartOpen é true */}
    </>
  );
};

export default Header;