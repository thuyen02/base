import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './Footer.css'
export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
      <div className="footer-wrap">
        <Row>
        <Col md={4}></Col>
          <Col md={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>about us</h2>
              <div className='footer-item'>
                <a target="_blank " href="">
                  Who we are
                </a>
              </div>
              <div className='footer-item'>
                <a target="_blank " href="">
                  Quality in the details
                </a>
              </div>
              <div className='footer-item'>
                <a href="" target="_blank ">
                  Customer Reviews
                </a>
              </div>
            </div>
          </Col>
          <Col md={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>departments</h2>
              <div className='footer-item'>
                <a target="_blank " href="">
                  Woman fashion
                </a>
              </div>
              <div className='footer-item'>
                <a target="_blank " href="">
                  Men fashion
                </a>
              </div>
              <div className='footer-item'>
                <a href="" target="_blank ">
                  Home
                </a>
              </div>
            </div>
          </Col>
          <Col md={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>help</h2>
              <div className='footer-item'>
                <a target="_blank " href="">
                  Customer service
                </a>
              </div>
              <div className='footer-item'>
                <a target="_blank " href="">
                  Size guide
                </a>
              </div>
              <div className='footer-item'>
                <a href="" target="_blank ">
                  Contact us
                </a>
              </div>
            </div>
          </Col>
          <Col md={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>payment & delivery</h2>
              <div className='footer-item'>
                <a target="_blank " href="">
                  Purchase items
                </a>
              </div>
              <div className='footer-item'>
                <a target="_blank " href="">
                  Guarantee
                </a>
              </div>
              <div className='footer-item'>
                <a href="" target="_blank ">
                  Contact us
                </a>
              </div>
            </div>
          </Col>
        <Col md={4}></Col>
        </Row>
      </div>
    </footer>
    );
  }
}

export default Footer;