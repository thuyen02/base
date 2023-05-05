import React from 'react';
import styled from 'styled-components';

const NotificationBox = styled.div`
  background-color: green;
  color: white;
  border-radius: 5px;
  width: 60px;
  height: 25px;
`;
function NotificationSuccess(props) {
  return <NotificationBox>adđ to card</NotificationBox>;
}

export default NotificationSuccess;
