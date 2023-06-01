import styled from 'styled-components';
import { Drawer, Card } from 'antd';

export const Container = styled(Drawer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 120px;
  /* min-width: 600px; */
  .ant-drawer-header {
    border-bottom: none;
  }
  .ant-drawer-body {
    padding: 0;
  }
  .ant-drawer-header-title {
    display: flex;
    flex-direction: row-reverse;
  }
  .ant-card-body {
    padding: 10px;
    width: 60%;
  }
`;
export const ProductList = styled.div`
  padding: 24px;
  overflow: auto;
`;
export const CardContent = styled(Card)`
  display: flex;
  /* flex-direction: row;
  justify-content: start;
  align-items: center; */
  border-radius: 0;
  border: 0;
  margin-bottom: 24px;
  :hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: translateZ(0);
  }
  .remove {
    width: 26px;
    opacity: 0;
  }
  :hover .remove {
    display: flex;
    align-items: start;
    cursor: pointer;
    width: 26px;
    height: 26px;
    transition: opacity 0.2s ease-in-out;
    opacity: 1;
  }
`;
export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  width: 80%;
`;
export const RemoveButton = styled.div`
  padding: 8px;
  /* width: 20% */
`;
export const ProductName = styled.div`
  font-size: 14px;
`;
export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
export const Quantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f2f3;
  width: 108px;
  height: 40px;
  font-size: 18px;
  margin: 42px 0 17px 0;
`;
export const QuantityButton = styled.button`
  border: none;
  width: 33%;
  cursor: pointer;
`;
export const QuantityButtonNone = styled.button`
  border: none;
  width: 33%;
  cursor: not-allowed;
`;
export const CheckOut = styled.div`
  padding: 24px;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;
export const CheckOutButton = styled.button`
  border-radius: 0;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 16px;
  width: 100%;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;
