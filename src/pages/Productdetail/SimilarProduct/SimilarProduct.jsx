/* eslint-disable no-useless-computed-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { Row } from 'antd';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import {
  SimilarProductContainer,
  TitleSimilarProduct,
  BtnNextProductSimilar,
  ItemProduct,
} from './SimilarProductStyle';
import productApi from '../../../API/productApi';

function SimilarProduct(props) {
  const [listProduct, setListProduct] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getListProduct();
  }, [page]);
  // Get list product from api
  const getListProduct = async () => {
    try {
      const params = {
        ['pagination[pageSize]']: 4,
        ['pagination[page]']: page,
        // ['filters[name][$contains]']: ,
      };
      const res = await productApi.getAll(params);
      setListProduct(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleNextProduct = () => {
    if (listProduct.length < 4) return;
    setPage(page + 1);
  };
  const handlePrevProduct = () => {
    if (page === 1) return;
    setPage(page - 1);
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
                productId={product.id}
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
