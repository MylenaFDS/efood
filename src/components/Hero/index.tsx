import React from 'react';
import { HeroContainer, HeroText, Logo, Fundo } from './styles';
import logoImage from '../../assets/images/logo.svg';
import Vector from '../../assets/images/Vector.svg'

const Hero: React.FC = () => (
  <HeroContainer>
    <Fundo src={Vector} alt="Fundo" />
    <Logo src={logoImage}  alt="Logo" />
    <HeroText>
      Viva experiências gastronômicas no conforto da sua casa
    </HeroText>
  </HeroContainer>
);

export default Hero;
