import React from 'react';
import { HeroContainer, HeroText, Logo } from './styles';
import logoImage from '../../assets/images/logo.svg';

const Hero: React.FC = () => (
  <HeroContainer>
    <Logo src={logoImage} alt="Logo" />
    <HeroText>
      Viva experiências gastronômicas no conforto da sua casa
    </HeroText>
  </HeroContainer>
);

export default Hero;
