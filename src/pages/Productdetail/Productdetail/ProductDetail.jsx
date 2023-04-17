import { Row, Col, Image } from 'antd';
import { useState, useEffect } from 'react';
import Parser from 'html-react-parser';
import SimilarProduct from '../SimilarProduct/SimilarProduct';
// import axiosInstance from '../../../shared/services/http-client';

import {
  ProductDetailContainer,
  ImageDetailStyles,
  TitleProductDetail,
  SelectSize,
  DetailQtyProduct,
  BtnAddToCard,
  TitleDescription,
  ContentDescription,
  QtyBtnContent,
  PriceProductDetail,
} from './ProductDetailStyle';
import productApi from '../../../API/productApi';

export default function ProductDetail() {
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');
  const [dataProduct, setDataProduct] = useState({});
  const [productId, setProductId] = useState(1);

  useEffect(() => {
    getDataProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const getDataProduct = async () => {
    try {
      const res = await productApi.getId(productId);
      console.log(res);
      setDataProduct(res.data.attributes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = value => {
    setSize(size);
    console.log(size, quantity);
  };

  // Change quantity
  const handleChangeQty = e => {
    if (e.target.id === 'add') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity => {
        if (quantity === 1) {
          return quantity;
        }
        return quantity - 1;
      });
    }
  };

  // Add to card

  const handleAddToCard = () => {
    const productAddToCard = {
      size: size,
      quantity: quantity,
      productId: productId,
    };
    console.log(productAddToCard);
  };

  //Get id  product from similar  component
  const handleSelectedProduct = id => {
    setProductId(id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ProductDetailContainer>
      <Row>
        <ImageDetailStyles md={12}>
          <Image
            height={622}
            style={{ boxShadow: '0 0 1px 1px rgba(72, 72, 72, 0.2)' }}
            preview={{
              visible: false,
            }}
            src={dataProduct.image}
            onClick={() => setVisible(true)}
          />

          <div
            style={{
              display: 'none',
            }}
          >
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: vis => setVisible(vis),
              }}
            >
              <Image src={dataProduct.image} />
            </Image.PreviewGroup>
          </div>
        </ImageDetailStyles>
        <Col md={12}>
          <TitleProductDetail>{dataProduct.name}</TitleProductDetail>
          <PriceProductDetail>
            <sup>đ</sup>
            {dataProduct.price}
          </PriceProductDetail>
          <div>
            <span>Size:</span>
            <SelectSize
              defaultValue={size}
              onChange={handleChange}
              options={[
                {
                  value: 'xl',
                  label: 'XL',
                },
                {
                  value: 'l',
                  label: 'L',
                },
                {
                  value: 'm',
                  label: 'M',
                },
                {
                  value: 's',
                  label: 'S',
                },
              ]}
            ></SelectSize>
          </div>
          <div>
            <QtyBtnContent>
              <DetailQtyProduct>
                <span id="less" onClick={e => handleChangeQty(e)}>
                  -
                </span>
                <span>{quantity}</span>
                <span id="add" onClick={e => handleChangeQty(e)}>
                  +
                </span>
              </DetailQtyProduct>
              <BtnAddToCard onClick={handleAddToCard}>ADD TO CARD</BtnAddToCard>
            </QtyBtnContent>
            <div>
              <TitleDescription>Description</TitleDescription>
              <ContentDescription>
                <div>{Parser(`${dataProduct.description}`)}</div>
              </ContentDescription>
            </div>
          </div>
        </Col>
      </Row>
      <SimilarProduct onIdSelected={handleSelectedProduct} />
    </ProductDetailContainer>
  );
}
