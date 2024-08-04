import React from 'react';
import { 
  FooterContainer, 
  Logo, 
  SocialMedia, 
  Disclaimer 
} from './styles';
import logo from '../../assets/images/logo.svg'; // Substitua pelo caminho correto da sua logo
import socialMediaIcons from '../../assets/images/socialMediaIcons.svg'; // Substitua pelo caminho correto dos ícones de redes sociais

const Footer: React.FC = () => (
  <FooterContainer>
    <Logo src={logo} alt="efood logo" />
    <SocialMedia src={socialMediaIcons} alt="Redes sociais" />
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
    </Disclaimer>
  </FooterContainer>
);

export default Footer;
