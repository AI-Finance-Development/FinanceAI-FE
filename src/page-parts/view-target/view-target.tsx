import React, { useState } from 'react'
import { ListUserTargetModel } from '../../api/models/list-user-target-model'
import dayjs from 'dayjs'
import { Flex } from 'antd'
import PrimaryButton from '../../components/atomics/primary-button/primary-button'
import Dangerbutton from '../../components/atomics/danger-button/danger-button'
import UpdateTargetModal from '../../components/modals/update-target-modal/update-target-modal'
import DeleteModal from '../../components/modals/delete-modal/delete-modal'
import { useTranslation } from 'react-i18next'

interface ViewTargetProps {
    data: ListUserTargetModel;
    onSuccessAction?: () => void;
}

const ViewTarget = (props: ViewTargetProps) => {

    const { t } = useTranslation();
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const update = t('page.parts.update-target');
    const delet = t('page.parts.delete-target');
    const targetdelete = t('page.parts.target-delete');
    const targetyourdelete = t('page.parts.target-your-delete');
    const areyousure = t('page.parts.sure-target-delete');
    return (
        <div style={{ width: "40%" }}>
            <span>{dayjs(props.data.loadDate).format('DD.MM')} {t('page.parts.expense')} %{props.data.amount} {t('page.parts.target')}</span>
            <Flex style={{ padding: "2rem 0" }} gap={"0.5rem"}>
                <PrimaryButton buttontext={update} onClick={() => { setOpenUpdateModal(true) }} />
                <Dangerbutton buttontext={delet} onClick={() => { setOpenDeleteModal(true) }}/>
            </Flex>
            <UpdateTargetModal id={props.data.id} open={openUpdateModal} onCancel={() => { setOpenUpdateModal(false) }}
                onSuccessAction={
                    () => {
                        setOpenUpdateModal(false)
                        props.onSuccessAction && props.onSuccessAction()
                    }
                }
            />
            <DeleteModal
                open={openDeleteModal}
                id={props.data.id}
                title={targetdelete}
                buttonText={targetyourdelete}
                subtitle={areyousure}
                onCancel={() => { setOpenDeleteModal(false) }}
                onSuccessAction={
                    () => {
                        setOpenDeleteModal(false)
                        props.onSuccessAction && props.onSuccessAction()
                    }
                }
            />
        </div>
    )
}

export default ViewTarget
