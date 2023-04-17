import styled from 'styled-components';
import { Button, Select, Col } from 'antd';

export const ProductDetailContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 40px 0 40px 0;
  font-family: 'Raleway';
`;

export const ImageDetailStyles = styled(Col)`
  text-align: center;
`;

export const TitleProductDetail = styled.h2`
  font-size: 26px;
  line-height: 41.6px;
`;
export const PriceProductDetail = styled.p`
  font-size: 18px;
  line-height: 28.8px;
`;
export const SelectSize = styled(Select)`
  .ant-select-selector {
    padding: unset !important;
    border-radius: 0;
    box-shadow: none;
    border: none !important;
    box-shadow: none !important;
    border-bottom: 1px solid black !important;
    box-shadow: 0px 1px 0px gray !important;
  }
  font-size: 18px;
  width: 65px;
  margin-left: 10px;
`;
export const QtyBtnContent = styled.div`
  margin-top: 24px;
`;

export const DetailQtyProduct = styled.div`
  width: 111px;
  height: 52px;
  background-color: #f1f2f3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  line-height: 28.8px;
  float: left;
  & > span:first-child:hover,
  & > span:last-child:hover {
    color: #8c8888;
    cursor: pointer;
  }
`;
export const BtnAddToCard = styled(Button)`
  background-color: #1d1f22;
  padding: 16px 32px;
  color: #ffffff;
  width: 394px;
  height: 52px;
  border-radius: 0;
  margin-left: 24px;
`;
export const TitleDescription = styled.h2`
  font-size: 20px;
  line-height: 28px;
  font-style: 'Raleway';
  color: #72757e;
  margin: 50px 0 6px 2px;
`;
export const ContentDescription = styled.div`
  overflow-y: scroll;
  border-top: 2px solid #f1f2f3;
  width: 650px;
  height: 248px;
  padding: 24px 0px 0 0;
  box-sizing: border-box;
  & > p {
    padding: 24px 16px;
    font-size: 16px;
    line-height: 25.6px;
    font-style: 'Roboto';
    width: 522px;
    height: 248px;
    box-sizing: border-box;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ced2d4;
    border-radius: 2px;
  }
`;
