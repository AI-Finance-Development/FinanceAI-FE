import React from 'react'
import './home-page.css'
import { Col, Row } from 'antd'
import InvestmentCard from '../../page-parts/investment-card/investment-card'

const HomePage = () => {
  return (
    <Row className='home-container'>
      <Col sm={0} lg={4}></Col>
      <Col sm={24} lg={8} style={{display:"flex", justifyContent:"center"}}>
          <InvestmentCard />
      </Col>
      <Col sm={24} lg={8} style={{display:"flex", justifyContent:"center"}}>
          <InvestmentCard />
      </Col>
      <Col sm={0} lg={4}></Col>
    </Row>
  )
}

export default HomePage