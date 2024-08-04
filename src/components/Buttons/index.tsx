import React from 'react';
import {SaibaMaisButton} from './styles'

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SaibaMaisButton>{children}</SaibaMaisButton>
);

export default Button;
