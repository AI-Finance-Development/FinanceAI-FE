import React from 'react'
import { Col, Image, Row } from 'antd'
import logo from '../../assets/logo.png';
import './start-page.css';
import { useTranslation } from 'react-i18next'
const Startpage = () => {
  const { t } = useTranslation();
  return (
    <Row className='backg'>
      <Col lg={3}></Col>
      <Col sm={24} md={24} lg={9} className='start-container'>
        <a className='listyazısı'>
          <ul>
            <li>{t('page.parts.ai')}</li> 
            <li>{t('page.parts.monthly-summary')}</li> 
            <li>{t('page.parts.budget-management')}</li> 
            <li>{t('page.parts.financial-report')}</li>
            <li>{t('page.parts.investment-advice')}</li>
          </ul>
        </a>
        <button className='startButon'>{t('page.startButton')}</button>
      </Col>
      
      <Col xs={0} sm={0} md={0} lg={10} className='left-containerr'>
        <Image preview={false} src={logo} alt='logo' />
      </Col>
      <Col lg={3}></Col>
    </Row>
  )
}

export default Startpage
