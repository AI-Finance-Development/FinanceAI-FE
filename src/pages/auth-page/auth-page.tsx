import React, { useEffect } from 'react'
import './auth-page.css'
import { Col, Image, Row } from 'antd'
import logo from '../../assets/logo.png';
import AuthPart from '../../page-parts/auth-part/auth-part';
import { useAtom } from 'jotai';
import { userInfoAtom } from '../../store/global-atoms';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {

    const navigate = useNavigate();
    const userInfo = useAtom(userInfoAtom);

    useEffect(() => {
        if (userInfo !== null && userInfo !== undefined) {
            return navigate('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo])

    return (
        <Row className='background'>
            <Col lg={3}></Col>
            <Col xs={0} sm={0} md={0} lg={9} className='left-container'>
                <Image preview={false} src={logo} alt='logo' />
            </Col>
            <Col sm={24} md={24} lg={9} className='auth-container'>
                <AuthPart />
            </Col>
            <Col lg={3}></Col>
        </Row>
    )
}

export default AuthPage