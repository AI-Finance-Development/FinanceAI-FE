
import React from 'react'
import './page-layout.css'
import { Col, Row } from 'antd'

interface PageLayoutProps {
    children: JSX.Element;
}

const PageLayout = (props: PageLayoutProps) => {
    return (
        <Row className="analysis-container">
            <Col span={4}></Col>
            <Col span={16}>
                {props.children}
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}

export default PageLayout