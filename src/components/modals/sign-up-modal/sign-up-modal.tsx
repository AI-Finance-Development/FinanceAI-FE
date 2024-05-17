import React, { useState } from 'react';
import { Checkbox, Form, Modal, ModalProps, Space } from 'antd';
import FaiInput from '../../atomics/fai-input/fai-input';
import PrimaryButton from '../../atomics/primary-button/primary-button';
import { useTranslation } from 'react-i18next';
import FormLabel from '../../atomics/form-label/form-label';
import { useAtom } from 'jotai';
import { messageAtom, userInfoAtom } from '../../../store/global-atoms';
import { useAxiosServiceClient } from '../../../services/axios';
import { Input } from 'antd'; 

interface SignUpModalProps extends ModalProps { }

const SignUpModal = (props: SignUpModalProps) => {
    const { AuthApi } = useAxiosServiceClient();
    const [, setMessage] = useAtom(messageAtom);
    const { t } = useTranslation();

    const onFinish = async (values: any) => {
        await AuthApi.SignUp(values)
            .then((resp) => {
                if (resp.data.data.username) {
                    setMessage({
                        type: "success",
                        message: t('toastMessage.success.sign-up')
                    });
                }
            })
            .catch((err) => {
                setMessage({
                    type: "error",
                    message: t('toastMessage.error.sign-up')
                });
            });
    };

    const [isOpenSignUpModal, setOpenSignUpModal] = useState(false);

    return (
        <Modal {...props} footer={null}>
            <div className='sign-up-container'>
                <Space direction='vertical'>
                    <span className='title'>{t('components.sign-up-modal.signup')}</span>
                    <span className='subTitle'>{t('components.sign-up-modal.details')}</span>
                </Space>
                <Form layout='vertical' style={{ marginTop: "1.5rem" }} onFinish={onFinish}>
                    <FormLabel label={t('components.sign-up-modal.username')}>
                        <Form.Item name={"username"}>
                            <FaiInput size='large' />
                        </Form.Item>
                    </FormLabel>
                    <FormLabel label={t('components.sign-up-modal.email')}>
                        <Form.Item name={"email"}>
                            <FaiInput size='large' placeholder="Example@gmail.com" />
                        </Form.Item>
                    </FormLabel>
                    <FormLabel label={t('components.sign-up-modal.password')}>
                        <Form.Item name={"password"}>
                            <Input.Password size='large' placeholder="At least 8 characters" />
                        </Form.Item>
                    </FormLabel>
                    <Form.Item>
                        <Form.Item name={"checkbox"} valuePropName="checked">
                            <Checkbox>{t('components.sign-up-modal.privacy')}</Checkbox>
                        </Form.Item>
                        <PrimaryButton htmlType='submit' buttontext={t('page-parts.auth-part.signUp')} />
                    </Form.Item>
                </Form>
                <SignUpModal open={isOpenSignUpModal} onCancel={() => { setOpenSignUpModal(false); }} />
            </div>
        </Modal>
    );
};

export default SignUpModal;
