import { Flex, Space } from 'antd'
import './lot-card.css'
import React from 'react'
import { ListLotDetailResponseModel } from '../../api/models/list-lot-detail-reponse-model';
import ImageHandler from '../../utils/image-handler';

export interface LotCardProps {
    lot: ListLotDetailResponseModel
}

const LotCard = ({ lot }: LotCardProps) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem" }}>
            <div>
                <ImageHandler code={lot.code} width={"100px"}/>
            </div>
            <Space direction='vertical'>
                <h1 className='lot-card-title'>{lot.company} ({lot.code})</h1>
                <Flex className='lot-card-subtitle' gap={"2rem"}>
                    <span>İstanbul</span>
                    <span>Döviz Try</span>
                </Flex>
                <div className='lot-card-title2' style={{ display: "flex", gap: "2rem" }}>
                    <span>{lot.value} ₺</span>
                </div>
                <Flex className='lot-card-subtitle' gap={"2rem"}>
                    <span>Kapanış</span>
                    <span>10/05</span>
                </Flex>
            </Space>
        </div>

    )
}

export default LotCard