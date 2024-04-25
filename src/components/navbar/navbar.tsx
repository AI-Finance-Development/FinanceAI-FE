import React from 'react';
import { Row, Col, Space } from 'antd';
import navbarLogo from '../../assets/navbar-logo.png';
import './navbar.css';
const Navbar = () => {
  return (
    <Row justify="space-around" className="containerNav">
      <Col><img className='logo' src={navbarLogo} alt="Logo" /></Col>
      <Col>
        <Space size={'large'}>
          <span >Ana Sayfa</span>
          <span >Nasıl Kullanılır ?</span>
          <span >Merak ettikleriniz</span>
          <span >Neden biz ?</span>
        </Space>
      </Col>
    </Row>
  );
};

export default Navbar;
