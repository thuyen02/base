/* eslint-disable no-useless-computed-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { Row } from 'antd';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import {
  SimilarProductContainer,
  TitleSimilarProduct,
} from './SimilarProductStyle';

function SimilarProduct(props) {
  const { categoryId, productId } = props;
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getListProduct();
  }, [productId]);

  // Get list product from api
  const getListProduct = async () => {
    try {
      const params = {
        ['filters[category]']: categoryId,
      };
      const res = await productApi.getAll(params);
      const data = res.data.filter(product => {
        return product.id !== +productId;
      });
      setListProduct([...data]);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(111, listProduct);
  return (
    <SimilarProductContainer>
      <TitleSimilarProduct>
        <p>Similar Product</p>
      </TitleSimilarProduct>
      <Row>
        <ProductSlide products={listProduct} />
      </Row>
    </SimilarProductContainer>
  );
}

export default SimilarProduct;
