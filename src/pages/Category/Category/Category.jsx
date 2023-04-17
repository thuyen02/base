import React, { Component, useEffect, useState } from 'react';
import './Category.css';
import { Pagination } from 'antd';
import { Layout } from 'antd';
import productApi from './ProductApi';
import ProductCard from '../../../Components/ProductCard/ProductCard';
const { Content, Footer, Sider } = Layout;

const Category = () => {
  const [productList, setproductList] = useState([]);


  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          [' pagination[pageSize]']: 5,
          ['  pagination[page]']: 1,
        };
        const response = await productApi.getAll(params);
        
        const hot = response.data; 
      
        setproductList(hot)
      } catch (error) {
        console.log('Faild to fetch product list: ', error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <div>
      <Layout style={{ backgroundColor: '#fff ' }}>
        <Content style={{ padding: '0 50px' }}>
          <div className="Category-header">
            <h2>Category</h2>
            <p>
              Products found: <span>75</span>{' '}
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
              
              <ul>
              {
                Array.from(productList).map(product=>{
                  let data = product.attributes;
                  return(
                    <div key={product.id}  >
                    <ProductCard
                      name={data.name}
                      price={data.price}
                      image={data.image}
                      />
                    </div >
                    
                  )
                })
              }
              </ul>
              {/* <CardProduct>
      <CardProductImage
        src={src}
      alt=""
    />
      <CardProductBody >
      <h3>Apolo Running</h3>
      <p><sup>đ</sup>500,000</p>  
      <IconCart><FiShoppingCart/></IconCart>
    </CardProductBody>  
    
  </CardProduct> */}
            
            </div>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
          <Pagination defaultCurrent={6} total={100} />
        </Footer>
      </Layout>
    </div>
  );
};
export default Category;
