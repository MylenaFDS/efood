import styled from 'styled-components';
import { cores } from '../../styles';
import { Link } from 'react-router-dom';


// Defina o estilo do botão
export const ButtonContainer = styled.button`
  position: relative;
  width: 82px;
  height: 24px;
  left: 8px;  /* Ajuste conforme necessário */
  margin-top: 240px;  /* Ajuste conforme necessário */
  background-color: ${cores.coral};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family:Roboto
&:hover {
    background-color: ${cores.coralDark}; /* Cor mais escura para hover */
}
`;

export const ButtonLink = styled(Link)`
position: absolute;
width: 82px;
height: 24px;
left: 8px;  /* Ajuste conforme necessário */
margin-top: 140px;  /* Ajuste conforme necessário */
background-color: ${cores.coral};
color: white;
border: none;
cursor: pointer;
font-family:Roboto
font-size: 14px;
text-decoration:none;

&:hover {
  background-color: ${cores.coralDark}; /* Cor mais escura para hover */
}

`