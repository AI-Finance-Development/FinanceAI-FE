import React from 'react'
import { Col, Image, Row } from 'antd'
import logo from '../../assets/logo.png';
import './start-page.css';
const Startpage = () => {
  return (
    <Row className='backg'>
    <Col lg={3}></Col>
    <Col sm={24} md={24} lg={9} className='start-container'>
        <a className='listyazısı'>
            <ul>
               <li>Yapay zeka destekli</li> 
               <li>Aylık özet ve hedef belirleme</li> 
               <li>Bütçe Yönetimi</li> 
               <li>Kişiselleştirilmiş Finansal Raporlar</li>
               <li>Yatırım tavsiyeleri</li>
            </ul>
        </a>
        <button className='startButon'>Hemen Başlayın</button>
    </Col>
    
    <Col xs={0} sm={0} md={0} lg={10} className='left-containerr'>
        <Image preview={false} src={logo} alt='logo' />
    </Col>
    <Col lg={3}></Col>
</Row>
  )
}

export default Startpage
