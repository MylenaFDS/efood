import styled from 'styled-components';
import { cores } from '../../styles';

export const ListingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 1290px;
  height: 100%;
  right: 170px;
  top: 0;

  @media (max-width: 1024px) {
    right: 50px;
    height: auto;
  }

  @media (max-width: 768px) {
    right: 0;
    top: 20px;
    padding: 0 10px;
    height: auto;
  }
`;

export const Restaurant = styled.div`
  position: absolute;
  width: 472px;
  height: 398px;
  background-color: ${cores.branca};
  border: 1px solid ${cores.coral};

  @media (max-width: 1024px) {
    width: 400px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 20px;
  }
`;

export const Highlight = styled.span`
  position: absolute;
  padding: 5px;
  width: 150px;
  height: 26px;
  left: 210px;
  top: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  background-color: ${cores.coral};
  color: ${cores.creme};

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
  }
`;

export const Tag = styled.div`
  position: absolute;
  padding: 5px;
  width: 75px;
  height: 26px;
  left: 370px;
  top: 16px;
  background-color: ${cores.coral};
  color: ${cores.creme};
  align-items: center;
  text-align: center;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;

  @media (max-width: 768px) {
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
  }
`;

export const RestaurantTitle = styled.h2`
  position: absolute;
  width: auto;
  height: 21px;
  left: 8px;
  top: 225px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.coral};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    top: 180px;
    font-size: 16px;
  }
`;

export const RestaurantDescription = styled.p`
  position: absolute;
  width: 456px;
  height: 88px;
  left: 8px;
  top: 262px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.coral};

  @media (max-width: 1024px) {
    width: 90%;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    width: 100%;
    top: 220px;
    font-size: 12px;
  }
`;
