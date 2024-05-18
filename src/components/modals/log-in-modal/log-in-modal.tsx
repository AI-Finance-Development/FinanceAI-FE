
import './log-in-modal.css'
import { Form, Modal, ModalProps, Space } from 'antd'
import FaiInput from '../../atomics/fai-input/fai-input'
import PrimaryButton from '../../atomics/primary-button/primary-button'
import { useAxiosServiceClient } from '../../../services/axios'
import { useTranslation } from 'react-i18next'
import FormLabel from '../../atomics/form-label/form-label'
import { useAtom } from 'jotai'
import { messageAtom, userInfoAtom } from '../../../store/global-atoms'
import { useNavigate } from 'react-router-dom'


interface LogInModalProps extends ModalProps {
    onSuccessAction?: () => void;
}

const LogInModal = (props: LogInModalProps) => {

    const navigate = useNavigate();
    const { t } = useTranslation();
    const [, setMessage] = useAtom(messageAtom);
    const { AuthApi } = useAxiosServiceClient();
    const [, setUserInfo] = useAtom(userInfoAtom);


    const onFinish = async (values: any) => {
        await AuthApi.LogIn(values)
            .then((resp) => {
                if (resp.data.data.username) {
                    var {id,username} = resp.data.data
                    setUserInfo({id,username:username})
                    props.onSuccessAction && props.onSuccessAction();
                    setMessage({
                        type: "success",
                        message: t('toastMessage.success.log-in')
                    })
                    navigate('/home')
                }
            })
            .catch((err) => {
                setMessage({
                    type: "error"
                    , message: t('toastMessage.error.log-in')
                })
            })
    }

    return (
        <Modal {...props} footer={null}>
            <div className='sign-up-container'>
                <Space direction='vertical'>
                    <span className='title'>Sign In</span>
                    <span className='subTitle'>Please enter your info</span>
                </Space>
                <Form layout='vertical' style={{ marginTop: "1.5rem" }} onFinish={onFinish}>
                    <FormLabel label='Kullanıcı Adı'>
                        <Form.Item name={"username"}>
                            <FaiInput size='large' />
                        </Form.Item>
                    </FormLabel>
                    <FormLabel label='Şifre'>
                        <Form.Item name={"password"}>
                            <FaiInput size='large' />
                        </Form.Item>
                    </FormLabel>
                    <Form.Item>
                        <PrimaryButton htmlType='submit' buttontext={t('page-parts.auth-part.logIn')}></PrimaryButton>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default LogInModal