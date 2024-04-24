import React from 'react'
import './auth-page.css'
import { Col, Image, Row, Space } from 'antd'
import logo from '../../assets/logo.png';
import PrimaryButton from '../../components/primary-button/primary-button';
import Divider from '../../components/divider/divider';

const AuthPage = () => {
    return (
        <Row>
            <Col sm={24} md={24} lg={12}>
                <Image src={logo} alt='logo' />
            </Col>
            <Col sm={24} md={24} lg={12} className='left-container'>
                <div className='right-container'>
                    <div className='header-title'>
                        <span>
                            HEMEN HEDEFLERİNE BAŞLA
                        </span>
                    </div>
                    <div className='header-body'>
                        <Space direction='vertical' size={'large'}>
                            <PrimaryButton buttonText='Google İle Giriş'></PrimaryButton>
                            <Divider />
                            <PrimaryButton buttonText='Google İle Giriş'></PrimaryButton>
                        </Space>
                        <div className='right-footer'>
                            <span>Zaten hesabın var mı?</span>
                            <PrimaryButton buttonText='Google İle Giriş'></PrimaryButton>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default AuthPage