import React from 'react';
import { Row, Col, Space } from 'antd';
import navbarLogo from '../../assets/navbar-logo.png';
import './navbar.css';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
  const{t}=useTranslation();

  
  return (
    <Row justify="space-around" className="containerNav">
      <Col><img className='logo' src={navbarLogo} alt="Logo" /></Col>
      <Col>
        <Space size={'large'}>
          <span >{t('components.navbar.homepage')}</span> 
          <span >{t('components.navbar.howToUse')}</span>
          <span >{t('components.navbar.thingsYouWonder')}</span>
          <span >{t('components.navbar.WhyUs')}</span>
        </Space>
      </Col>
    </Row>
  );
};

export default Navbar;
