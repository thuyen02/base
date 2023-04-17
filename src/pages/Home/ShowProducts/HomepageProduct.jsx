import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductA from './Product A.png';
import ProductB from './Product B.png';
import ProductC from './Product C.png';
import ProductD from './Product D.png';
import './Card.css';
import { Card } from 'antd';
import ProductCard from '../../../components/ProductCard/ProductCard';

const { Meta } = Card;
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Homepage_clothes_title = styled.div`
  margin-top: 40px;
  padding: 10px 50px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
`;

// const CustomCard = styled(Card)`
//   & .react-multi-carousel-track li {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

const HomepageProduct = () => {
  return (
    <div>
      <div className="homepage-clothes">
        <Homepage_clothes_title>
          <h2>Clothes</h2>
        </Homepage_clothes_title>
        <div className="homepage-clothes-products">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            //   deviceType={this.props.deviceType}
            itemClass="carousel-item-padding-40-px"
          >
            <ProductCard src={ProductB} />
            <ProductCard src={ProductC} />
            <ProductCard src={ProductD} />
            <ProductCard src={ProductA} />
          </Carousel>
        </div>
        ;
      </div>
      <div className="homepage-clothes">
        <Homepage_clothes_title>
          <h2>Sport shoes</h2>
        </Homepage_clothes_title>
        <div className="homepage-clothes-products">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            //   deviceType={this.props.deviceType}
            itemClass="carousel-item-padding-40-px"
          >
            <ProductCard src={ProductB} />
            <ProductCard src={ProductC} />
            <ProductCard src={ProductD} />
            <ProductCard src={ProductA} />
          </Carousel>
        </div>
        ;
      </div>
    </div>
  );
};

export default HomepageProduct;
