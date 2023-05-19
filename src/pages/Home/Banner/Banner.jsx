import styled from 'styled-components';
import bannerImage from './banner.png'

import { Carousel } from 'antd';

const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
`;

const Banner = styled.div`
width: 100vw;
height: 100vh;
  width: 1240px;
  height: 500px;
  object-fit: cover;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: 60%;
`;

const Banner_desc = styled.div`
  padding-top: 100px;
  margin-left: 50px;
  width: 40%;
`;

const Banner_desc_h4 = styled.h4`
  opacity: 0.7;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  color: #72757e;
  /* font-family: 'Raleway'; */
`;

const Banner_desc_h1 = styled.h1`
  font-style: normal;
  /* font-family: 'Raleway'; */
  font-weight: 600;
  font-size: 42px;
  line-height: 120%;
  color: #1d1f22;
  margin: 20px 0;
`;

const Banner_desc_btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 167px;
  height: 52px;
  text-transform: uppercase;
  background: #1d1f22;
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: rgb(30, 104, 129);
  }
`;


const BannerImg = () => {
  return (
    <Carousel autoplay>
      <div>
        <BannerContainer>
          <Banner>
            <Banner_desc>
              <Banner_desc_h4>summer collection 2019</Banner_desc_h4>
              <Banner_desc_h1>
                Colorful summer dresses are already in store
              </Banner_desc_h1>
              <Banner_desc_btn>Learn more</Banner_desc_btn>
            </Banner_desc>
          </Banner>
        </BannerContainer>
      </div>
      <div>
        <BannerContainer>
          <Banner>
            <Banner_desc>
              <Banner_desc_h4>summer collection 2019</Banner_desc_h4>
              <Banner_desc_h1>
                Colorful summer dresses are already in store
              </Banner_desc_h1>
              <Banner_desc_btn>Learn more</Banner_desc_btn>
            </Banner_desc>
          </Banner>
        </BannerContainer>
      </div>
    </Carousel>
  );
};

export default BannerImg;
