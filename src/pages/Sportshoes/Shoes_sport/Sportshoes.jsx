import React, { Component, useEffect, useState } from 'react';
import './Sportshoes.css';
import { Button, Pagination } from 'antd';
import { Layout } from 'antd';
import productApi from '../../../API/productApi';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
const { Content, Footer, Sider } = Layout;

const Sportshoes = () => {
  const [productId, setProductId] = useState(1);
  const [productList, setproductList] = useState([]);
  const [pageSize, setpageSize] = useState(8);
  const [page, setpage] = useState(1);
  const [total, settotal] = useState(7);
  const [categoryId] = useState(2);
  useEffect(() => {
    fetchProductList();
  }, []);
  const fetchProductList = async () => {
    try {
      const response = await productApi.getCategoryId(categoryId);
      const hot = response.data.attributes.products.data;
      setproductList(hot);
      console.log(hot);
    } catch (error) {
      console.log('Faild to fetch product list: ', error);
    }
  };

  return (
    <div>
      <Layout style={{ backgroundColor: '#fff ' }}>
        <Content style={{ padding: '0 50px' }}>
          <div className="Category-header">
            <h2>Category</h2>
            <p>
              Products found: <span>{total}</span>{' '}
            </p>
          </div>

          <Layout style={{ padding: '0 0', backgroundColor: '#fff' }}>
            <Sider style={{ backgroundColor: '#fff ' }} width={200}>
              <div className="category-menu">
                <ul className="category-menu_ul">
                  <li>
                    <a href="" style={{ color: 'blue ' }}>
                      Shoes
                    </a>
                  </li>
                  <li>
                    <Link to="/category">Clothes</Link>
                  </li>
                </ul>
              </div>
            </Sider>
            <div
              style={{
                padding: '0 24px',
                minHeight: 280,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              {Array.from(productList).map(product => {
                let data = product.attributes;
                return (
                  <Link
                    style={{ color: 'black', paddingTop: '24px' }}
                    key={product.id}
                    to={`/product/${product.id}`}
                  >
                    <ProductCard
                      name={data.name}
                      price={data.price}
                      image={data.image}
                    />
                  </Link>
                );
              })}
            </div>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
          <Pagination defaultCurrent={1} total={10} />
        </Footer>
      </Layout>
    </div>
  );
};
export default Sportshoes;
