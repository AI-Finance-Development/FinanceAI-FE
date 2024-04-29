import React from 'react'
import './how-it-works.css';
import { Card, Col, Row, Space } from 'antd'
import Meta from 'antd/es/card/Meta'
import step1 from '../../assets/how-it-works-user.png';
import { ReactComponent as SVGDirection } from '../../assets/direction.svg';


const HowItWorks = () => {
  return (
    <div className='container'>
      <div className='header'>
        <Row justify={'center'} gutter={8}>
          <Col><span className='how-it-works-how'>Nasıl</span></Col>
          <Col><span style={{ color: "white" }}>Kullanılır</span></Col>
        </Row>
      </div>
      <div>
        <Row gutter={16} justify={'center'}>
          <Col xl={6} span={24}>
            <Space>
              <Card
                className='how-it-work-card'
                hoverable={false}
                cover={<img alt="example" src={step1} />}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
              <SVGDirection />
            </Space>

          </Col>
          <Col xl={6} span={24}>
            <Space>
              <Card
                className='how-it-work-card'
                hoverable={false}
                cover={<img alt="example" src={step1} />}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
              <SVGDirection />
            </Space>
          </Col>
          <Col xl={6} span={24}>
            <Space >
              <Card
                className='how-it-work-card'
                hoverable={false}
                cover={<img alt="example" src={step1} />}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
              <SVGDirection />
            </Space>
          </Col>
          <Col xl={6} span={24}>
            <Space>
              <Card
                className='how-it-work-card'
                hoverable={false}
                cover={<img alt="example" src={step1} />}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
            </Space>

          </Col>
        </Row>
      </div>
    </div>  )
}

export default HowItWorks