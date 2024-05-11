import React, { useState } from 'react'
import { Checkbox, Form, Modal, ModalProps, Space } from 'antd'
import FaiInput from '../../atomics/fai-input/fai-input'
import PrimaryButton from '../../atomics/primary-button/primary-button'
import { useTranslation } from 'react-i18next'
import FormLabel from '../../atomics/form-label/form-label'
import SecondaryButton from '../../atomics/secondary-button/secondary-button'
import LogInModal from '../log-in-modal/log-in-modal'


interface SignUpModalProps extends ModalProps { }

const SignUpModal = (props: SignUpModalProps) => {

    const { t } = useTranslation();

    const onFinish = (values: any) => {
        console.log("values: ", values)
    }
    const [isOpenLoginModal, setOpenLogInModal] = useState(false);
    const [isOpenSignUpModal, setOpenSignUpModal] = useState(false);
    return (
        <Modal {...props} footer={null}>
            <div className='sign-up-container'>
                <Space direction='vertical'>
                    <span className='title'>Sign Up</span>
                    <span className='subTitle'>Please enter your details</span>
                </Space>
                <Form layout='vertical' style={{ marginTop: "1.5rem" }} onFinish={onFinish}>
                    <FormLabel label='Kullanıcı Adı'>
                        <Form.Item name={"username"}>
                            <FaiInput size='large' />
                        </Form.Item>
                    </FormLabel>
                    <FormLabel label='Email'>
                        <Form.Item name={"email"}>
                            <FaiInput size='large' placeholder="Example@gmail.com" />
                        </Form.Item>
                    </FormLabel>
                    <FormLabel label='Şifre'>
                        <Form.Item name={"password"}>
                            <FaiInput size='large' placeholder="At least 8 character" />
                        </Form.Item>
                    </FormLabel>
                    <Form.Item>
                    
                        <Form.Item name={"checkbox"}>
                        <Checkbox>I agree with Terms and Privacy</Checkbox>
                        </Form.Item>
                  
                        
                        <PrimaryButton htmlType='submit' buttontext={t('page-parts.auth-part.signUp')} onClick={() => { setOpenLogInModal(true) }}></PrimaryButton>
                        <Form.Item name={"checkbox"}>
                        <span className='subTitle'>Already have an account ?</span>
                        </Form.Item>
                        <SecondaryButton htmlType='submit' buttontext={t('page-parts.auth-part.logIn')}></SecondaryButton>
                    </Form.Item>
                </Form>
                <LogInModal open={isOpenLoginModal} onCancel={() => { setOpenLogInModal(false) }}/>
              
            </div>
        </Modal>
    )
}

export default SignUpModal