import React, { Component, useEffect, useState } from 'react';
import './Sportshoes.css';
import { Button, Pagination } from 'antd';
import { Layout } from 'antd';
import productApi from '../../../API/productApi';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
const { Content, Footer, Sider } = Layout;

const Sportshoes = () => {
 // const [productId, setProductId] = useState(1);
 const [productList, setproductList] = useState([]);
 const [pageSize, setpageSize] = useState(8);
 const [page, setpage] = useState(1);
 const [total, settotal] = useState(12);
 const [category, setcategoryId] = useState({
   value: 'sports',
 });
 const [size, setSize] = useState('large');
 useEffect(() => {
   fetchProductList();
 }, []);
 const fetchProductList = async (pg = page, pgSize = pageSize) => {
   try {
     const params = {
       ['filters[category]']: category.value === 'sport' ? 1 : 2,
       ['pagination[pageSize]']: pgSize,
       ['pagination[page]']: pg,
     };
     const response = await productApi.getAll(params);
     const hot = response.data;
     setproductList(hot);
     console.log(hot);
   } catch (error) {
     console.log('Faild to fetch product list: ', error);
   }
 };

// const prevPage = async() =>{
 
//   const pg = page === 1 ? 1 : page-1;
//   fetchProductList(pg)
//   setpage(pg)
// }
// const nextPage = async() =>{
//   const pg = page + 1;
//   fetchProductList(pg)
//   setpage(pg)
// }

const [current, setCurrent] = useState(1);
const onChange = (page) => {
 fetchProductList(page)
 setCurrent(page);
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
                  <div
                    style={{ color: 'black', paddingTop: '24px' }}
                    key={product.id}
                    to={`/product/${product.id}`}
                  >
                    <ProductCard
                      name={data.name}
                      price={data.price}
                      image={data.image}
                      productId={product.id}
                    />
                  </div>
                );
              })}
            </div>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
          <Pagination onChange={onChange} defaultCurrent={1} total={20} />
        </Footer>
      </Layout>
    </div>
  );
};
export default Sportshoes;
