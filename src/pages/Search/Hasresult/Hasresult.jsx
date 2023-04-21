import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { Row, Col } from 'antd';
import ProductB from './Product B.png';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '../../../shared/services/http-client';
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
  const key = searchParams.get('key');
  //Get api from search
  useEffect(() => {
    getDataFromSearch();
  }, [key]);
  const getDataFromSearch = async () => {
    try {
      const res = await productApi.getAll();
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products);

  return (
    <HasResult>
      <HasResultTitle>
        <HasResultTitleH4>Showing 8 results for "{key}"</HasResultTitleH4>
      </HasResultTitle>
      <div className="hasResult_product">
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          <ColC md={8} sm={12} xs={24}>
            <ProductCard src={ProductB}></ProductCard>
          </ColC>
          <ColC md={8} sm={12} xs={24}>
            <ProductCard src={ProductB}></ProductCard>
          </ColC>
          <ColC md={8} sm={12} xs={24}>
            <ProductCard src={ProductB}></ProductCard>
          </ColC>
        </Row>
        <Row>
          <ColC md={8} sm={12} xs={24}>
            <ProductCard src={ProductB}></ProductCard>
          </ColC>
          <ColC md={8} sm={12} xs={24}>
            <ProductCard src={ProductB}></ProductCard>
          </ColC>
          <ColC md={8} sm={12} xs={24}>
            <ProductCard src={ProductB}></ProductCard>
          </ColC>
        </Row>
      </div>
    </HasResult>
  );
}
