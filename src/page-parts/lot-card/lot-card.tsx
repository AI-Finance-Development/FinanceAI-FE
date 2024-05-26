import { Flex, Image, Space } from 'antd'
import './lot-card.css'
import React from 'react'
import thylogo from '../../assets/thy-logo.png';
import { ListLotDetailResponseModel } from '../../api/models/list-lot-detail-reponse-model';

export interface LotCardProps {
    lot:ListLotDetailResponseModel
}

const LotCard = (props: LotCardProps) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem" }}>
            <div>
                <Image src={thylogo} />
            </div>
            <Space direction='vertical'>
                <h1 className='lot-card-title'>{props.lot.company}</h1>
                <Flex className='lot-card-subtitle' gap={"2rem"}>
                    <span>İstanbul</span>
                    <span>Döviz Try</span>
                </Flex>
                <div className='lot-card-title2' style={{ display: "flex", gap: "2rem" }}>
                    <span>{props.lot.value}</span>

                </div>
                <Flex className='lot-card-title3' gap={"2rem"}>
                    <span>Kapanış</span>
                    <span>10/05</span>
                </Flex>
            </Space>
        </div>

    )
}

export default LotCard