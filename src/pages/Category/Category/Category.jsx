import React, { Component } from 'react';
import './Category.css';
import { Pagination } from 'antd';
// import CardItem from '../../../Components/CardItem/CardItem';
import { Card } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Content, Footer, Sider } = Layout;
const { Meta } = Card;


const Category = () => (
  <Layout style={{ backgroundColor: '#fff ' }}>

    <Content style={{ padding: '0 50px' }}>
    <div className='Category-header' >
    <h2>Category</h2>
    <p  >Products found: <span>75</span> </p>
      </div>
  
      <Layout style={{ padding: '24px 0', backgroundColor: '#fff' }}>
        <Sider  style={{ backgroundColor: '#fff ' }} width={200}>
        <div className='category-menu' >

         
          <ul  className='category-menu_ul' >
            <li><a href="">Men</a> </li>
            <li><a href="">Woman</a> </li>
          </ul>
    
      </div>
        </Sider>
        <div style={{ padding: '0 24px', minHeight: 280, display: 'flex',flexWrap:'wrap',justifyContent:'space-around' }}>

          <Card
            hoverable
            style={{
              width: 240,
              marginBottom:24,
            }}
            cover={
              <img
                alt="ProductB"
                src="https://tronhouse.com/assets/data/editor/source/tips-chup-hinh-thoi-trang-dep-va-an-tuong/chup-anh-thoi-trang.jpg"
              />
            }
          >
            <Meta title="Apollo Running Short" description="đ599.000" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
              marginBottom:24,
            }}
            cover={
              <img
                alt="ProductB"
                src="https://tronhouse.com/assets/data/editor/source/tips-chup-hinh-thoi-trang-dep-va-an-tuong/chup-anh-thoi-trang.jpg"
              />
            }
          >
            <Meta title="Apollo Running Short" description="đ599.000" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
              marginBottom:24,
            }}
            cover={
              <img
                alt="ProductB"
                src="https://tronhouse.com/assets/data/editor/source/tips-chup-hinh-thoi-trang-dep-va-an-tuong/chup-anh-thoi-trang.jpg"
              />
            }
          >
            <Meta title="Apollo Running Short" description="đ599.000" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
              marginBottom:24,
            }}
            cover={
              <img
                alt="ProductB"
                src="https://tronhouse.com/assets/data/editor/source/tips-chup-hinh-thoi-trang-dep-va-an-tuong/chup-anh-thoi-trang.jpg"
              />
            }
          >
            <Meta title="Apollo Running Short" description="đ599.000" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
              marginBottom:24,
            }}
            cover={
              <img
                alt="ProductB"
                src="https://tronhouse.com/assets/data/editor/source/tips-chup-hinh-thoi-trang-dep-va-an-tuong/chup-anh-thoi-trang.jpg"
              />
            }
          >
            <Meta title="Apollo Running Short" description="đ599.000" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
              marginBottom:24,
            }}
            cover={
              <img
                alt="ProductB"
                src="https://tronhouse.com/assets/data/editor/source/tips-chup-hinh-thoi-trang-dep-va-an-tuong/chup-anh-thoi-trang.jpg"
              />
            }
          >
            <Meta title="Apollo Running Short" description="đ599.000" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
              marginBottom:24,
            }}
            cover={
              <img
                alt="ProductB"
                src="https://tronhouse.com/assets/data/editor/source/tips-chup-hinh-thoi-trang-dep-va-an-tuong/chup-anh-thoi-trang.jpg"
              />
            }
          >
            <Meta title="Apollo Running Short" description="đ599.000" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
              marginBottom:24,
            }}
            cover={
              <img
                alt="ProductB"
                src="https://tronhouse.com/assets/data/editor/source/tips-chup-hinh-thoi-trang-dep-va-an-tuong/chup-anh-thoi-trang.jpg"
              />
            }
          >
            <Meta title="Apollo Running Short" description="đ599.000" />
          </Card>
         
        </div>
        
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center',backgroundColor: '#fff' }}>
    <Pagination defaultCurrent={6} total={100} />
    </Footer>
  </Layout>
);

export default Category;
