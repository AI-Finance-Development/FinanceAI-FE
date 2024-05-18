import React from 'react'
import { Select, SelectProps } from 'antd'

export interface FaiSelectProps extends SelectProps { }

const FaiSelect = (props: FaiSelectProps) => {
    return (
        <Select
            {...props}
        />)
}

export default FaiSelect