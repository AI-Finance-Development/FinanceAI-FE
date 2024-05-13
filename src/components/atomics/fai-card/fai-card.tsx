import { Card, CardProps } from 'antd'
import React from 'react'

interface FaiCardProps extends CardProps{
    children:JSX.Element;
}

const FaiCard = (props:FaiCardProps) => {
  return (
    <Card {...props} >
        {props.children}
    </Card>
  )
}

export default FaiCard