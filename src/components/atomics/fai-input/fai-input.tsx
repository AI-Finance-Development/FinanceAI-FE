import { Input, InputProps } from 'antd'
import React from 'react'

interface FaiInputProps extends InputProps { }

const FaiInput = (props: FaiInputProps) => {
    return (
        <Input {...props} />
    )
}

export default FaiInput