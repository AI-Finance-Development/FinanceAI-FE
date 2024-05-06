import React from 'react'
import './log-in-modal.css'
import { Form, Modal, ModalProps, Space } from 'antd'
import FaiInput from '../../atomics/fai-input/fai-input'
import PrimaryButton from '../../atomics/primary-button/primary-button'
import { useTranslation } from 'react-i18next'


interface LogInModalProps extends ModalProps { }

const LogInModal = (props: LogInModalProps) => {

    const {t} = useTranslation();

    const onFinish = (values: any) => {
        console.log("values: ", values)
    }

    return (
        <Modal {...props} footer={null}>
            <div className='sign-up-container'>
                <Space direction='vertical'>
                    <span className='title'>Sign Up</span>
                    <span className='subTitle'>Please enter your info</span>
                </Space>
                <Form layout='vertical' style={{ marginTop: "1.5rem" }} onFinish={onFinish}>
                    <Form.Item label="Kullanıcı Adı" name={"username"}>
                        <FaiInput size='large' />
                    </Form.Item>
                    <Form.Item label="Şifre" name={"password"}>
                        <FaiInput size='large' />
                    </Form.Item>
                    <Form.Item>
                        <PrimaryButton htmlType='submit' buttontext={t('page-parts.auth-part.logIn')}></PrimaryButton>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default LogInModal