import React from 'react'
import './title-with-subtitle.css'
import { Space } from 'antd'

export interface TitleWithSubtitleProps {
    title: string;
    subtitle?: string;
}

const TitleWithSubtitle = (props: TitleWithSubtitleProps) => {
    return (
        <Space direction='vertical'>
            <span className='title'>{props.title}</span>
            <span className='subTitle'>{props.subtitle}</span>
        </Space>
    )
}

export default TitleWithSubtitle