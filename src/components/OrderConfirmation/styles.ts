// styles.ts
import styled from 'styled-components';
import { cores } from '../../styles';
export const ConfirmationContainer = styled.div`

  background-color: ${cores.coral};

  text-align: center;
  h2{
    text-align: left;
  }
`;

export const Message = styled.p`
  
  color: #fff;
  margin-top: 10px;
  text-align: left;
  font-family: Roboto,sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 22px;
text-align: left;

`;
export const CloseButton = styled.button`
width: 100%;
max-width: 344px;
height: 24px;
margin: auto;
margin-top:20px;
padding: 0;
background-color: #fff;
color: ${cores.coral};
font-size: 14px;
border: none;
cursor: pointer;
display: block;
text-align: center;
font-family: Roboto, sans-serif;
font-weight: 700;
;`