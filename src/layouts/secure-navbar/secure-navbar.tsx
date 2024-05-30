import { Col, Image, Row, Space } from 'antd';
import React from 'react';
import './secure-navbar.css';
import { LogoutOutlined } from '@ant-design/icons';
import logo from '../../assets/logo-financeai.png';
import SecondaryButton from '../../components/atomics/secondary-button/secondary-button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Securenavbar = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Row justify="space-around" className="containerSecureNav">
            <Col>
                <Space size="large" className='titles'>
                    <Image src={logo} preview={false} alt='finance-ai' />
                    <span onClick={() => { navigate('/analysis') }}>{t('secure-navbar.title-one')}</span>
                    <span onClick={() => { navigate('/invest') }}>{t('secure-navbar.title-two')}</span>
                </Space>
            </Col>
            <Col className='logOut'>
                <SecondaryButton buttontext='Çıkış Yap' icon={<LogoutOutlined />} size='large' />
            </Col>
        </Row>
    );
};

export default Securenavbar;
