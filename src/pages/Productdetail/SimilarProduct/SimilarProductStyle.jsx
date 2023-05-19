import styled from 'styled-components';
import { Col } from 'antd';
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export const SimilarProductContainer = styled.div`
  max-width: 100%;
  position: relative;
  margin: 80px auto 80px;
  font-family: 'Raleway';
`;
export const TitleSimilarProduct = styled.div`
  text-align: center;
  & > p {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 42px;
    line-height: 67.2px;
    color: #1d1f22;
  }
`;
export const ItemProduct = styled(Col)`
  display: flex;
  justify-content: center;
`;
export const BtnNextProductSimilar = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f2f3;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    font-size: 30px;
    cursor: pointer;
    transition: background-color 0.5s ease-in-out;
    &:hover {
      background-color: black;
      color: #ffffff;
    }
  }
`;
