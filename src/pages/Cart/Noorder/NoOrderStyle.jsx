import { Drawer } from 'antd';
import styled from 'styled-components';

export const Container = styled(Drawer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .ant-drawer-header {
    border-bottom: none;
  }
  .ant-drawer-header-title {
    display: flex;
    justify-content: end;
  }
  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 111px 24px;
  /* height: 90%; */
`;
export const EmptyNoti = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
export const EmptyText = styled.p`
  text-align: center;
  font-size: 12px;
`;
export const EmptyButton = styled.button`
  border-radius: 0;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 16px;
  width: 100%;
`;
