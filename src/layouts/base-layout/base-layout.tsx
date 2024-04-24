import React from 'react'
import './base-layout.css'

interface BaseLayoutProps{
    children: JSX.Element;
}

const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <div className='base-container'>
        {props.children}
    </div>
  )
}

export default BaseLayout