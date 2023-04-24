import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const NoresultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NoresultContent = styled.div`
  width: 700px;
  height: 50px;
`;
const NoresultTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-weight: bold;
`;

const NoresultSubtitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  opacity: 0.7;
`;

export default function Noresult() {
  const [searchParams] = useSearchParams();
  const key = searchParams.get('q');
  return (
    <NoresultWrapper>
      <NoresultContent>
        <NoresultTitle>We couldn't find anything for "{key}"</NoresultTitle>
        <NoresultSubtitle>
          These popular items might interest you
        </NoresultSubtitle>
      </NoresultContent>
    </NoresultWrapper>
  );
}
