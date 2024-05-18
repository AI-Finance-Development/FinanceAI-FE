import React from 'react'
import './fai-card.css'
import { Card, CardProps } from 'antd'


interface FaiCardProps extends CardProps {
  children: JSX.Element;
}

const FaiCard = (props: FaiCardProps) => {
  return (
    <Card {...props} >
      <div className='card-container'>
        {props.children}
      </div>
    </Card>
  )
}

export default FaiCard