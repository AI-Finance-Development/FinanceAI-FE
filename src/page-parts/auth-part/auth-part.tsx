import React from 'react'
import './auth-part.css'
import {  Space } from 'antd'
import PrimaryButton from '../../components/primary-button/primary-button'
import Divider from '../../components/divider/divider'

const AuthPart = () => {
    return (
        <div className='right-container'>
            <div className='header-title'>
                <span>
                    HEMEN HEDEFLERİNE BAŞLA
                </span>
            </div>
            <div className='header-body'>
                <Space direction='vertical' size={'small'}>
                    <PrimaryButton buttonText='Google İle Giriş'></PrimaryButton>
                    <Divider/>
                    <PrimaryButton buttonText='Google İle Giriş'></PrimaryButton>
                </Space>
                <div className='right-footer'>
                    <span>Zaten hesabın var mı?</span>
                    <PrimaryButton buttonText='Google İle Giriş'></PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default AuthPart