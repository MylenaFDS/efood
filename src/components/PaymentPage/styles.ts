import styled from 'styled-components';
import { cores } from '../../styles';

export const PaymentContainer = styled.div`
  h2{

width: 270px;
height: 19px;

top: 32px;
white-space: nowrap;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
/* identical to box height */

color: #FFEBD9;


  }
`;

export const Label = styled.label`
  display: block;
  margin-top:20px;
  
  font-family: Roboto,sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;

`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0 20px 0;
  box-sizing: border-box;
  border: 1px solid ${cores.coral};
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  div {
    flex: 1;
    label{
        font-family: Roboto,sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
text-align: left;

    }
  }
`;

export const SubmitButton = styled.button`
  width: 344px;
  height:24px;
  
  margin-top: 20px;
  background-color: #fff;
  color: ${cores.coral};
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

export const BackButton = styled.button`
  width: 344px;
  height:24px;
  margin-top: 12px;
  background-color: #fff;
  color: ${cores.coral};
  border: none;
  cursor: pointer;
  font-weight: bold;
`;


