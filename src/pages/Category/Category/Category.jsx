import React, { Component, useEffect, useState } from 'react';
import './Category.css';
import { Button, Pagination } from 'antd';
import { Layout } from 'antd';
import productApi from '../../../API/productApi';
import queryString from 'query-string';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
const { Content, Footer, Sider } = Layout;

const Category = () => {
  const [productId, setProductId] = useState(1);
  const [productList, setproductList] = useState([]);
  const [pageSize, setpageSize] = useState(8);
  const [page, setpage] = useState(1);
  const [total,settotal] = useState(17);
  const [categoryId, setcategoryId] = useState(1);
  useEffect(() => {
    fetchProductList();
  }, []);
    const fetchProductList = async (pg = page,pgSize = pageSize) => {
      try {
        const params = {
          ['pagination[pageSize]']: pgSize,
          ['pagination[page]']: pg,
        };
        const response = await productApi.getAll(params);
        const hot = response.data;
        setproductList(hot);
        console.log(hot)
       
      } catch (error) {
        console.log('Faild to fetch product list: ', error);
      }
    };

const prevPage = async() =>{
  const pg = page === 1 ? 1 : page-1;
  fetchProductList(pg)
  setpage(pg)
}
const nextPage = async() =>{
  const pg = page + 1 ;
  fetchProductList(pg)
  setpage(pg)
}
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

          <Layout style={{ padding: '24px 0', backgroundColor: '#fff' }}>
            <Sider style={{ backgroundColor: '#fff ' }} width={200}>
              <div className="category-menu">
                <ul className="category-menu_ul">
                  <li>
                    <a href="">Men</a>{' '}
                  </li>
                  <li>
                    <a href="">Woman</a>{' '}
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
                justifyContent: 'space-around',
              }}
            >
              {Array.from(productList).map(product => {
                let data = product.attributes;
                return (
                  <Link style={{color:'black'}}  key={product.id} to={`/product/${product.id}`}>           
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
          <Pagination defaultCurrent={1} total={20} />
         <button onClick={nextPage} >next</button>
        <button onClick={prevPage} >back</button>
        </Footer>
      </Layout>
    </div>
  );
};
export default Category;
