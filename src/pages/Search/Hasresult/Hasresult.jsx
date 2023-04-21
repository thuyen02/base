import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import productApi from '../../../API/productApi';

const HasResult = styled.div`
  padding: 50px !important;
`;

const HasResultTitle = styled.div`
  width: fit-content;
`;

const HasResultTitleH4 = styled.h4`
  width: fit-content;
  margin-left: 50px;
`;

const ColC = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Hasresult() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const key = searchParams.get('q');
  //Get api from search
  useEffect(() => {
    getDataFromSearch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  const getDataFromSearch = async () => {
    const params = {
      // eslint-disable-next-line no-useless-computed-key
      ['filters[name][$contains]']: key,
    };
    try {
      const res = await productApi.getAll(params);
      if (res.data.length === 0) {
        directions();
      }
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products);
  const directions = () => {
    navigate(`/noresults?${key}`);
  };

  return (
    <HasResult>
      <HasResultTitle>
        <HasResultTitleH4>
          Showing {products.length} results for "{key}"
        </HasResultTitleH4>
      </HasResultTitle>
      <div className="hasResult_product">
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          {Array.from(products).map(product => {
            const productAtri = product.attributes;
            return (
              <ColC md={8} sm={12} xs={24} key={product.id}>
                <ProductCard
                  productId={product.id}
                  name={productAtri.name}
                  price={productAtri.price}
                  image={productAtri.image}
                ></ProductCard>
              </ColC>
            );
          })}
        </Row>
      </div>
    </HasResult>
  );
}
