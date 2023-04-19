import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Card.css';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import productApi from '../../../API/productApi';
import { Link } from 'react-router-dom';
// import QueryString from 'qs';

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

const HomepageClothesTitle = styled.div`
  margin-top: 40px;
  padding: 10px 50px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
`;

const HomepageProduct = props => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getListProduct();
  }, []);
  // Get list product from api
  const getListProduct = async () => {
    try {
      const params = {
        // eslint-disable-next-line no-useless-computed-key
        ['pagination[pageSize]']: 4,
        // eslint-disable-next-line no-useless-computed-key
        [' panigation[page]']: 1,
      };
      const res = await productApi.getAll(params);
      setListProduct(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="homepage-clothes">
        <HomepageClothesTitle>
          <h2>Clothes</h2>
        </HomepageClothesTitle>
        <div className="homepage-clothes-products">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            //   deviceType={this.props.deviceType}
            itemClass="carousel-item-padding-40-px"
          >
            {Array.from(listProduct).map(product => {
              const productData = product.attributes;
              return (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard
                    name={productData.name}
                    price={productData.price}
                    image={productData.image}
                  />
                </Link>
              );
            })}
          </Carousel>
        </div>
        ;
      </div>
      <div className="homepage-clothes">
        <HomepageClothesTitle>
          <h2>Sport shoes</h2>
        </HomepageClothesTitle>
        <div className="homepage-clothes-products">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            //   deviceType={this.props.deviceType}
            itemClass="carousel-item-padding-40-px"
          >
            {Array.from(listProduct).map(product => {
              const productData = product.attributes;
              return (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard
                    name={productData.name}
                    price={productData.price}
                    image={productData.image}
                  />
                </Link>
              );
            })}
          </Carousel>
        </div>
        ;
      </div>
    </div>
  );
};

export default HomepageProduct;
