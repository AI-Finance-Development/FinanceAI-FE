import React from 'react'
import './footer-card.css'
import { Col, Row } from 'antd'
import TitleWithSubtitle from '../title-with-subtitle/title-with-subtitle'
import { ReactComponent as SVGVector } from '../../../assets/vector.svg';

interface FooterCardProps {
    title: string;
    subtitle: string;
    action: () => void;
}

const FooterCard = (props: FooterCardProps) => {
    return (
        <div className='footer-container'>
            <Row justify={'space-between'}>
                <Col>
                    <span style={{ fontSize: "1.25rem", fontWeight: "600" }}> {props.title}</span>
                </Col>
                <Col>
                    <SVGVector style={{ cursor: 'pointer' }} onClick={props.action} />
                </Col>
            </Row>
            <div style={{ paddingTop: '1rem' }}>
                <TitleWithSubtitle title="" subtitle={props.subtitle} />
            </div>
        </div>
    )
}

export default FooterCard