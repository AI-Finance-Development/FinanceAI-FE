import { Modal, ModalProps } from 'antd'
import React from 'react'
import TitleWithSubtitle from '../../atomics/title-with-subtitle/title-with-subtitle'
import Dangerbutton from '../../atomics/danger-button/danger-button'
import { useAxiosServiceClient } from '../../../services/axios';
import { loadingAtom, messageAtom } from '../../../store/global-atoms';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next'
interface DeleteModalProps extends ModalProps {
    id?: number;
    title: string;
    subtitle?: string;
    buttonText?: string;
    onSuccessAction: () => void;
}

const DeleteModal = (props: DeleteModalProps) => {

    const [loading] = useAtom(loadingAtom);
    const [, setMessage] = useAtom(messageAtom);
    const { TargetApi } = useAxiosServiceClient();
    const { t } = useTranslation();
    const deleteTarget = () => {
        if (props.id) {
            TargetApi.Delete(props.id).then((response) => {
                if (response.data.success) {
                    setMessage({
                        type: "success",
                        message: t('modals.succes.delete-target')
                    })
                    props.onSuccessAction && props.onSuccessAction()
                }
            }).catch(() => {
                setMessage({
                    type: "error",
                    message: t('modals.error.delete-target')
                })
            })
        }

    }

    return (
        <Modal {...props} footer={null}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
                <TitleWithSubtitle title={props.title} subtitle={props.subtitle || ''} />
                <Dangerbutton loading={loading} buttontext={props.buttonText || t('modals.button.delete')} onClick={deleteTarget} />
            </div>
        </Modal>
    )
}

export default DeleteModal