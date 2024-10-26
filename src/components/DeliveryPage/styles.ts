import styled from 'styled-components';
import { cores } from '../../styles';

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 345px;
height: 347px;
gap: 0px;
opacity: 0px;

  h2{
    font-family: Roboto,sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    text-align: left;
    margin-bottom:10px;
  }
`;
export const Label = styled.label`
width: 344px;
height: 56px;
margin-top: 50px;
`;
export const Input = styled.input`
display: flex;
flex-direction: column;
width: 344px;
height: 32px;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid ${cores.coral};
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 16px;

  & > div {
    flex: 1;
    & > input {
        width:155px;
        height:32px;
        padding: 10px;
  margin: 8px 0;
        border: 1px solid ${cores.coral};
    }
  }
`;
export const SubmitButton = styled.button`
  width: 344px;
  padding: 10px;
  margin-top: 20px;
  background-color: #fff;
  color: ${cores.coral};
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

export const BackButton = styled.button`
  width: 344px;
  padding: 10px;
  margin-top: 12px;
  background-color: #fff;
  color: ${cores.coral};
  border: none;
  cursor: pointer;
  font-weight: bold;
`;
