import { Col, Row, Tabs } from 'antd'
import React from 'react'
import LotCard from '../../page-parts/lot-card/lot-card'
import TitleWithSubtitle from '../../components/atomics/title-with-subtitle/title-with-subtitle'
import { useTranslation } from 'react-i18next'

const LotDetailPage = () => {

    const {t} = useTranslation();
    return (
        <Row>
            <Col span={4}></Col>
            <Col span={16}>
                <LotCard title='Türk Hava Yolları(THYAO)' value='323,56' />
                <div>
                    <Tabs
                        defaultActiveKey="1"
                        items={
                            [
                                {
                                    key: "1",
                                    label: "",
                                    icon: <TitleWithSubtitle title={"Hisse Hakkında AI"}
                                        subtitle={""} />,
                                    children: <p>asd</p>
                                },
                                {
                                    key: "2",
                                    label: "",
                                    icon: <TitleWithSubtitle title={"Hisse Hakkında Haberler"} subtitle={""} />,
                                    children: <p>de</p>
                                },
                                {
                                    key: "3",
                                    label: "",
                                    icon: <TitleWithSubtitle title={"Hisse Hakkında AI"}
                                        subtitle={""} />,
                                    children: <p>asd</p>
                                },
                            ]
                        }
                    />
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}

export default LotDetailPage