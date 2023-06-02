/** @format */

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { ProductSlideContainer, SlideItem } from './ProductSlideStyle';
import ProductCard from '../ProductCard/ProductCard';

const ProductSlide = props => {
  const { products } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    // variableWidth: true,
    centerPadding: ' -15px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ProductSlideContainer>
      <Slider {...settings}>
        {products &&
          products.map(product => {
            return (
              <SlideItem key={product.id}>
                <ProductCard
                  productId={product.id}
                  name={product.attributes.name}
                  price={product.attributes.price}
                  image={product.attributes.image}
                />
              </SlideItem>
            );
          })}
      </Slider>
    </ProductSlideContainer>
  );
};

export default ProductSlide;
