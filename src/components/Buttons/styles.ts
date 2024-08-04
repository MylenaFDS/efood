import styled from 'styled-components';
import { cores } from '../../styles';


// Defina o estilo do botão
export const SaibaMaisButton = styled.button`
  position: absolute;
  width: 82px;
  height: 24px;
  left: 8px;  /* Ajuste conforme necessário */
  margin-top: 140px;  /* Ajuste conforme necessário */
  background-color: ${cores.coral};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

&:hover {
    background-color: ${cores.coralDark}; /* Cor mais escura para hover */
}
`;