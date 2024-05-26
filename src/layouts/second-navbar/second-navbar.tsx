import { Button, Col, Row, Space } from 'antd';
import React from 'react';
import navbarLogo from '../../assets/navbar-logo.png';
import './second-navbar.css';
import { useTranslation } from 'react-i18next';
import logOutikon from '../../assets/logout.png';

const Secondnavbar = () => {
    const { t } = useTranslation();
    return (
        <Row justify="space-around" className="containerSecondNav">
            <Col>
                <Space size="large">
                    <img className='logo' src={navbarLogo} alt="Logo" />
                    <div className='navItem'>Harcamalar</div>
                    <div className='navItem'>Yatırım</div>
                </Space>
            </Col>
        
            <Col className='logOut'>
                <Space size="large">
                    <img className='logOutikon' src={logOutikon} alt="ikon" />
                    <div>Çıkış Yap</div>
                </Space>
            </Col>
        </Row>
    );
};

export default Secondnavbar;
