import React, { useState } from 'react'
import { ListUserTargetModel } from '../../api/models/list-user-target-model'
import dayjs from 'dayjs'
import { Flex } from 'antd'
import PrimaryButton from '../../components/atomics/primary-button/primary-button'
import Dangerbutton from '../../components/atomics/danger-button/danger-button'
import UpdateTargetModal from '../../components/modals/update-target-modal/update-target-modal'
import DeleteModal from '../../components/modals/delete-modal/delete-modal'

interface ViewTargetProps {
    data: ListUserTargetModel;
    onSuccessAction?: () => void;
}

const ViewTarget = (props: ViewTargetProps) => {

    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);


    return (
        <div style={{ width: "40%" }}>
            <span>{dayjs(props.data.loadDate).format('DD.MM')} tarihinde bir sonraki ay için harcamalarınızda %{props.data.amount} olarak hedef belirlediniz.</span>
            <Flex style={{ padding: "2rem 0" }} gap={"0.5rem"}>
                <PrimaryButton buttontext='Hedefini Güncelle' onClick={() => { setOpenUpdateModal(true) }} />
                <Dangerbutton buttontext='Hedefi Sil' onClick={() => { setOpenDeleteModal(true) }}/>
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
                title='Hedefi Sil'
                buttonText='Hedefini Sil'
                subtitle='Hedefinizi silmekten emin misiniz ?'
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