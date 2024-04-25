import React from 'react'
import './auth-page.css'
import { Col, Image, Row} from 'antd'
import logo from '../../assets/logo.png';
import AuthPart from '../../page-parts/auth-part/auth-part';

const AuthPage = () => {
    return (
        <Row>
            <Col sm={24} md={24} lg={12} className='left-container'>
                <Image src={logo} alt='logo' />
            </Col>
            <Col sm={24} md={24} lg={12}>
                <AuthPart/>
            </Col>
        </Row>
    )
}

export default AuthPage