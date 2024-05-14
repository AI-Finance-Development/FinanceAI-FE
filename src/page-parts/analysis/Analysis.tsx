import { Row,Image,Col } from 'antd'
import React from 'react'
import grafik from '../../assets/grafik.png';
import './analysis.css'
const Analysis = () => {
  return (
    <div>
       <Row className='Analiz'>
            <Col lg={3}></Col>
            <Col xs={0} sm={0} md={0} lg={9} className='left-c'>
                <Image preview={false} src={grafik} alt='grafik' />
            </Col>
            <Col sm={24} md={24} lg={5} className='auth-c'>
                <button className='buton1'>Hedef Oluştur</button>
                <button className='buton2'>Hedefleri gör</button>
            </Col>
            <Col lg={3}></Col>
        </Row>
    </div>
  )
}

export default Analysis
