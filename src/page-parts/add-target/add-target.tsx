import { Form } from 'antd'
import React from 'react'
import FormLabel from '../../components/atomics/form-label/form-label'
import { useTranslation } from 'react-i18next'
import FaiSelect from '../../components/atomics/fai-select/fai-select'
import PrimaryButton from '../../components/atomics/primary-button/primary-button'
import { loadingAtom, messageAtom, userInfoAtom } from '../../store/global-atoms'
import { useAtom } from 'jotai'
import { useAxiosServiceClient } from '../../services/axios'

interface AddTargetProps {
    onSuccessAction?: () => void;
}


const AddTarget = (props: AddTargetProps) => {

    const { t } = useTranslation();
    const [loading] = useAtom(loadingAtom);
    const [userInfo] = useAtom(userInfoAtom);
    const [, setMessage] = useAtom(messageAtom);
    const { TargetApi } = useAxiosServiceClient();

    const onFinish = (values: { amount: number }) => {
        if (userInfo && userInfo.id) {
            let data = { amount: values.amount, userId: userInfo.id }
            TargetApi.Add(data).then((response) => {
                if (response.data.success) {
                    setMessage({
                        type: "success",
                        message: t('page-parts.succes-target')
                    })
                    props.onSuccessAction && props.onSuccessAction()
                }
            }).catch((err) => {
                console.log("err3: ", err)
                setMessage({ type: "error", message: "err.data.message" })
            })
        }
    }
    return (
        <div style={{ width: "40%" }}>
            <Form layout='vertical' style={{ marginTop: "1.5rem" }} onFinish={onFinish}>
                <FormLabel label={t('modals.add-target.target')}>
                    <Form.Item name={"amount"}>
                        <FaiSelect size='large' options={[
                            { value: 10, label: "10%" },
                            { value: 15, label: "15%" },
                            { value: 20, label: "20%" },
                            { value: 25, label: "25%" },
                        ]} />
                    </Form.Item>
                </FormLabel>
                <Form.Item>
                    <PrimaryButton loading={loading} htmlType='submit' buttontext={t('page-parts.add-target.button')} />
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddTarget