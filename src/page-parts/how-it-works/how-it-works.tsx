import React from 'react'
import './how-it-works.css';
import { Card, Col, Row, Space } from 'antd'
import Meta from 'antd/es/card/Meta'
import step1 from '../../assets/how-it-works-user.png';
import step2 from '../../assets/3.png';
import step3 from '../../assets/2.png';
import step4 from '../../assets/4.png';
import { ReactComponent as SVGDirection } from '../../assets/direction.svg';
import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <div className='header'>
        <Row justify={'center'} gutter={8}>
          <Col><span style={{ color: "white" }} className='how-it-works-how'>{t('howItWorks.how')}</span></Col>
          <Col><span style={{ color: "#48C9C1" }}>{t('howItWorks.use')}</span></Col>
        </Row>
      </div>
      <div className='cardText'>
        <Row gutter={16} justify={'center'}>
          <Col xl={6} span={24}>
            <Space>
              <Card
                className='how-it-work-card'
                hoverable={false}
                cover={<img className='ikon' alt="example" src={step1} />}
              >
                <Meta title={t('howItWorks.step1')} />
              </Card>
              <SVGDirection />
            </Space>
          </Col>
          <Col xl={6} span={24}>
            <Space>
              <Card
                className='how-it-work-card'
                hoverable={false}
                cover={<img className='ikon' alt="example" src={step3} />}
              >
                <Meta title={t('howItWorks.step2')} />
              </Card>
              <SVGDirection />
            </Space>
          </Col>
          <Col xl={6} span={24}>
            <Space >
              <Card
                className='how-it-work-card'
                hoverable={false}
                cover={<img className='ikon' alt="example" src={step4} />}
              >
                <Meta title={t('howItWorks.step3')} />
              </Card>
              <SVGDirection />
            </Space>
          </Col>
          <Col xl={6} span={24}>
            <Space>
              <Card
                className='how-it-work-card'
                hoverable={false}
                cover={<img className='ikon' alt="example" src={step2} />}
              >
                <Meta title={t('howItWorks.step4')} />
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HowItWorks
