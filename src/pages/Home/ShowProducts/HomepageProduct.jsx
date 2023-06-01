import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

import { Row } from 'antd';
import { useEffect, useState } from 'react';
import productApi from '../../../API/productApi';
import ProductSlide from '../../../Components/ProductSlide/ProductSlide';
import './Card.css';
// import QueryString from 'qs';

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 4,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

const HomepageClothesTitle = styled(Row)`
  margin: 40px 50px 0;
  padding: 10px 50px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
`;

const HomepageProduct = props => {
  const [listClothes, setListClothes] = useState([]);
  const [listShoes, setListShoes] = useState([]);

  useEffect(() => {
    getListProduct();
  }, []);
  // Get list product from api

  const getListProduct = async () => {
    try {
      const resClother = await productApi.getCategory(1);
      setListClothes(resClother.data.attributes.products.data);
      const resShoes = await productApi.getCategory(2);
      setListShoes(resShoes.data.attributes.products.data);
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
        <Row>
          <ProductSlide products={listClothes} />
        </Row>
      </div>
      <div className="homepage-clothes">
        <HomepageClothesTitle>
          <h2>Sport shoes</h2>
        </HomepageClothesTitle>

        <Row>
          <ProductSlide products={listShoes} />
        </Row>
      </div>
    </div>
  );
};

export default HomepageProduct;
