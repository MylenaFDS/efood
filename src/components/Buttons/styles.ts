import styled from 'styled-components';
import { cores } from '../../styles';
import { Link } from 'react-router-dom';


// Defina o estilo do botão
export const ButtonContainer = styled.button`
  position: relative;
  width: 90px;
  height: 30px;
  left: 8px;  /* Ajuste conforme necessário */
  top: 140px;  /* Ajuste conforme necessário */
  background-color: ${cores.coral};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family:Roboto;
  font-size: 14px;
  font-weight:700px;
  line-height:16.41px;
  padding:5px;
  text-align:center;
  text-decoration:none;
&:hover {
    background-color: ${cores.coralDark}; /* Cor mais escura para hover */
}
`;

export const ButtonLink = styled(Link)`
position: relative;
width: 90px;
height: 30px;
left: 8px;  /* Ajuste conforme necessário */
top: 140px;  /* Ajuste conforme necessário */
background-color: ${cores.coral};
color: white;
border: none;
cursor: pointer;
font-family:Roboto;
font-size: 14px;
font-weight:700px;
line-height:16.41px;
padding:5px;
text-align:center;
text-decoration:none;
color: ${cores.creme};
&:hover {
  background-color: ${cores.coralDark}; /* Cor mais escura para hover */
}

`