/* eslint-disable no-useless-computed-key */
import { Col, Image, Row } from 'antd';
import Parser from 'html-react-parser';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SimilarProduct from '../SimilarProduct/SimilarProduct';
import swal from 'sweetalert';
// import axiosInstance from '../../../shared/services/http-client';

import orderApi from '../../../API/orderApi';
import productApi from '../../../API/productApi';
import {
  BtnAddToCard,
  ContentDescription,
  DetailQtyProduct,
  ImageDetailStyles,
  PriceProductDetail,
  ProductDetailContainer,
  QtyBtnContent,
  SelectSize,
  TitleDescription,
  TitleProductDetail,
} from './ProductDetailStyle';
import { useDispatch } from 'react-redux';
import { fetchOrderAction } from '../../../OrderRedux/order';

const notification = {
  title: 'Successful!',
  text: 'Loggin is successful!',
  icon: 'success',
  button: 'OK',
  position: 'top-end',
  width: 400,
  padding: '2em',
  backdrop: true,
  timer: 1000,
};

export default function ProductDetail() {
  const isLogin = localStorage.getItem('at') ? true : false;
  const userId = localStorage.getItem('ut');
  const { id } = useParams();
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');
  const [dataProduct, setDataProduct] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    getDataProduct();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //Add to cart

  const handleAddToCart = async () => {
    if (!isLogin) return navigate('/signin');
    const dataInput = {
      // size: size,
      product: +id,
      user: +userId,
      quantity: +quantity,
      total: quantity * dataProduct.price,
    };
    const params = {
      populate: 'product',
      ['filters[user][id]']: userId,
    };
    try {
      const res = await orderApi.getOrderList(params);
      const orders = res.data;
      let foundOrder = false;
      orders.forEach(order => {
        const getProductInOrder = order.attributes.product.data
          ? order.attributes.product.data
          : false;
        if (getProductInOrder && getProductInOrder.id === dataInput.product) {
          foundOrder = true;
          updateOrder(order, dataInput);
        }
      });
      if (!foundOrder) {
        if (dataInput === {}) return;
        createOrder(dataInput);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateOrder = async (order, dataInput) => {
    try {
      const orderId = order.id;
      await orderApi.updateOrder(orderId, dataInput);
      setQuantity(1);
      swal({
        ...notification,
        text: `The Quantity of products has changed in the cart`,
      });
      dispatch(fetchOrderAction(userId))
    } catch (err) {
      console.log(err);
    }
  };
  const createOrder = async dataInput => {
    if (!id) return;

    try {
      await orderApi.createOrder(dataInput);
      setQuantity(1);
      swal({ ...notification, text: `Add to cart successfully` });
      dispatch(fetchOrderAction(userId))
    } catch (err) {
      throw new Error(err);
    }
  };

  const getDataProduct = async () => {
    try {
      const res = await productApi.getId(id);
      setDataProduct(res.data.attributes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = value => {
    setSize(size);
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
    // setProductId(id);
    navigate(`/product/${id}`);
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
