import styled from 'styled-components';

export const ProductSlideContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  /* padding: 10px; */

  & .slick-prev,
  .slick-next {
    color: red !important;
    opacity: 0.9;
    background-color: black;
    width: 40px !important;
    height: 40px;
  }
  & .slick-prev:hover,
  .slick-next:hover {
    background-color: gray;
  }
  & .slick-prev:not(:hover),
  .slick-next:not(:hover) {
    background-color: rgb(17, 17, 17);
  }
  & .slick-prev:before,
  .slick-next:before {
    font-family: unset;

    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    color: rgb(246, 245, 243);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px !important;
  }
`;
export const SlideItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-left: 10px;
`;
