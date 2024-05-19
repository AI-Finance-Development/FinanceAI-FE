import React from 'react'
import { ListUserTargetModel } from '../../api/models/list-user-target-model'
import dayjs from 'dayjs'

interface ViewTargetProps {
    data: ListUserTargetModel
}

const ViewTarget = (props: ViewTargetProps) => {
    return (
        <div style={{ width: "40%" }}>
            <span>{dayjs(props.data.loadDate).format('DD.MM')} tarihinde bir sonraki ay için harcamalarınızda %{props.data.amount} olarak hedef belirlediniz.</span>
        </div>
    )
}

export default ViewTarget