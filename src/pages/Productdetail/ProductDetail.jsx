import { Col, Row, Image, Select} from 'antd';
import CardProduct from './CardProduct/CardProduct';
import './ProductDetail.css'
const ProductDetail = () => (
  
  <>
     <section className="product-detail">
      <Row>
      <Col xs={24} sm={12}>
      <Image
        preview={{
          visible: false,
        }}
            width={300}
            style={{
          
        }}
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        
      />
      </Col>
      <Col xs={24} sm={12}>
          <h2>Maya Tunic</h2>
          <p><sup>đ</sup>500,000</p>
          <div className="choose-size">
            <label htmlFor="size">size:</label>
          <Select
          
          defaultValue="S"
          style={{
            width: 70,
          }}
        
           options={[
           {
              value: 'S',
              label: 'S',
             },
            {
              value: 'S',
              label: 'S',
            },
            {
              value: 'M',
              label: 'M',
            },
            {
              value: 'L',
              label: 'L',
            },
            {
              value: 'XL',
              label: 'XL',
              
            },
         ]}
    />
          </div >
          <div className="quantity-add-toCard"  style={{display: 'flex'}}>
            <div className="quantity-product">
              <button className='btn-less'>-</button>
              <input className='input-qty' type="text" value={1}/>
             <button className='btn-more'>+</button>
          </div>
            {/* <Button
              id="btn-buy"
              style={{
                backgroundColor: '#1D1F22',
                color: '#FFFFFF',
                borderRadius: 0,
                height: '52px',
                width: '52px',
              }}
              htmlType="submit"
              block
        
              >  ADD TO CARD
        </Button> */}
      
          </div>
          <div className="desciption">
            <h4>Description</h4>
            <div style={{
              overflow: 'auto',
              width: 500,
              height: 100,
              paddingRight: 50,
              
            }}>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quis voluptatem eveniet minima veritatis dolore dolor quasi vitae? Dicta corrupti ipsum consequuntur autem porro assumenda eius voluptatibus inventore saepe iusto! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis cum aperiam et vel fugiat dicta, unde delectus molestias consectetur, inventore magnam optio cumque explicabo voluptate voluptatem assumenda officiis, hic ea? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dignissimos molestiae laborum neque dicta nostrum necessitatibus debitis accusantium quas vitae dolores aperiam velit, nam voluptatem nulla non aliquam, quasi cupiditate.</div>
          </div>
          
      </Col>
    </Row>
    </section>
     <section className="product-detail">
      <Row>
      <Col xs={24} sm={12} md={6} >
      <CardProduct/>
      </Col>
        <Col xs={24} sm={12} md={6}>
      Col 2
      </Col>
        <Col xs={24} sm={12} md={6}>
      Col 2
      </Col>
      <Col xs={24} sm={12} md={6}>
      Col 2
      </Col>
    </Row>
    </section>
  </>
  
  
  
);
export default ProductDetail