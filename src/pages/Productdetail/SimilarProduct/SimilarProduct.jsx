/* eslint-disable react-hooks/exhaustive-deps */
import { Row } from 'antd';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axiosInstance from '../../../shared/services/http-client';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import {
  SimilarProductContainer,
  TitleSimilarProduct,
  BtnNextProductSimilar,
  ItemProduct,
} from './SimilarProductStyle';

function SimilarProduct(props) {
  const [listProduct, setListProduct] = useState([]);
  const [filter, setFilter] = useState(1);

  useEffect(() => {
    getListProduct();
  }, [filter]);
  // Get list product from api
  const getListProduct = async () => {
    try {
      const res = await axiosInstance.get(
        `/products?pagination[pageSize]=4&pagination[page]=${filter}`
      );
      const limittedProduct = res.data;
      setListProduct(limittedProduct);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleNextProduct = () => {
    if (listProduct.length < 4) return;
    setFilter(filter + 1);
  };
  const handlePrevProduct = () => {
    if (filter === 1) return;
    setFilter(filter - 1);
  };
  const handleClickProductItem = id => {
    props.onIdSelected(id);
  };
  return (
    <SimilarProductContainer>
      <TitleSimilarProduct>
        <p>Similar Product</p>
      </TitleSimilarProduct>
      <Row>
        <BtnNextProductSimilar md={2}>
          <div id="less" onClick={handlePrevProduct}>
            <BsArrowLeft />
          </div>
        </BtnNextProductSimilar>

        {Array.from(listProduct).map(product => {
          let data = product.attributes;
          return (
            <ItemProduct
              key={product.id}
              md={5}
              onClick={() => handleClickProductItem(product.id)}
            >
              <ProductCard
                style={{ transition: 'transform 0.3s ease-out' }}
                name={data.name}
                price={data.price}
                image={data.image}
              />
            </ItemProduct>
          );
        })}

        <BtnNextProductSimilar md={2}>
          <div id="next" onClick={handleNextProduct}>
            <BsArrowRight />
          </div>
        </BtnNextProductSimilar>
      </Row>
    </SimilarProductContainer>
  );
}

export default SimilarProduct;
