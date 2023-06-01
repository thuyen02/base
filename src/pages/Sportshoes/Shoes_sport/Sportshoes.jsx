import React, { useEffect, useState } from 'react';
import './Sportshoes.css';
import { Pagination } from 'antd';
import { Layout } from 'antd';
import productApi from '../../../API/productApi';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
const { Content, Footer, Sider } = Layout;

const Sportshoes = () => {
 const [productList, setproductList] = useState([]);
 const [pageSize, setpageSize] = useState(8);
 const [page, setpage] = useState(1);
 const [total, settotal] = useState(30);
 const [category, setcategory] = useState({
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

const onChange = (page) => {
 fetchProductList(page)
 setpage(page);
};
  return (
    <div>
    <Layout style={{ backgroundColor: '#fff ' }}>
      <Content style={{ padding: '0 50px' }}>
        <div className="Category-header">
          <h2>Category</h2>
          <p>
            Products found: <span>{productList.length}</span>{' '}
          </p>
        </div>

        <Layout style={{ padding: '0 0', backgroundColor: '#fff' }}>
          <Sider style={{ backgroundColor: '#fff ' }} width={200}>
            <div className="category-menu">
              <ul className="category-menu_ul">
                <li>
                  <a href="" style={{ color: 'blue ' }}>
                    Clothes
                  </a>
                </li>
                <li>
                  <Link to="/sportshoes">Sport Shoes</Link>
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

              // gap:24,
            }}
          >
            {Array.from(productList).map(product => {
              let data = product.attributes;
              return (
                <div
                  style={{ color: 'black', marginTop: '24px', marginRight:'24px'}}
                  key={product.id}
                >
                  <ProductCard
                    productId={product.id}
                    name={data.name}
                    price={data.price}
                    image={data.image}
                  />
                </div>
              );
            })}
          </div>
        </Layout>
      </Content>
      
      <Footer style={{ textAlign: 'center',backgroundColor: '#fff' }}>
      
      {/* <Button disabled={page <=1 } onClick={prevPage} type="text" danger>
      <LeftOutlined style={{color:''}} />

  <Button onClick={prevPage} type="text" danger>
      1
  </Button>
  <Button onClick={nextPage} type="text" danger>
     2
  </Button>

  <RightOutlined />
  </Button> */}
      </Footer>  
    </Layout>
  <Pagination onChange={onChange} defaultCurrent={1} total={40}  style={{textAlign: 'center'}}/>
  </div>
  );
};
export default Sportshoes;
