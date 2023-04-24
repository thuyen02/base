import { Row, Col, Image } from 'antd';
import { useState, useEffect } from 'react';
import Parser from 'html-react-parser';
import SimilarProduct from '../SimilarProduct/SimilarProduct';
import { useNavigate, useParams } from 'react-router-dom';
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
  const isLogin = localStorage.getItem('at') ? true : false;
  const { id } = useParams();
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');
  const [dataProduct, setDataProduct] = useState({});
  const [productId, setProductId] = useState(id);
  const navigate = useNavigate();
  useEffect(() => {
    getDataProduct();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  //Add to cart

  const handleAddToCart = () => {
    const data = {
      size: size,
      product: productId,
      user: 1,
      quantity: quantity,
    };
    if (isLogin) {
      addtoCart(data);
    } else {
      navigate('/signin');
    }
  };

  const addtoCart = async data => {
    const postData = await productApi.postAddToCart(data);
    console.log(postData);
  };

  const getDataProduct = async () => {
    try {
      const res = await productApi.getId(productId);
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
                  value: 4,
                  label: 'XL',
                },
                {
                  value: 3,
                  label: 'L',
                },
                {
                  value: 2,
                  label: 'M',
                },
                {
                  value: 1,
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
              <BtnAddToCard onClick={handleAddToCart}>ADD TO CARD</BtnAddToCard>
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
