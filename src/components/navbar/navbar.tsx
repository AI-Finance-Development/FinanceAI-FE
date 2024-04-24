import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Row, Col, Space } from 'antd';
import logo from './logo.png';
import './navbar.css';
const Navbar = () => {
  return (
    <Router>
      <div>
        <Row justify="space-around" className="containerNav">
        <Col ><img className='logo' src={logo} alt="Logo"  /></Col> 
          <Col>
            <Space size={'large'}>
              <Link  to="/">Ana Sayfa</Link>
              <Link to="/kullanma-kilavuzu">Nasıl Kullanılır ?</Link>
              <Link to="/merak-ettikleriniz">Merak ettikleriniz</Link>
              <Link to="/neden-biz">Neden biz ?</Link>
            </Space>
          </Col>
        </Row>
      </div>
    </Router>
  );
};

export default Navbar;
