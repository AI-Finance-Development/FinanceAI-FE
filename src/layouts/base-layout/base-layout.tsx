import React from 'react'
import './base-layout.css'
import Navbar from '../../components/navbar/navbar';

interface BaseLayoutProps{
    children: JSX.Element;
}

const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <div className='base-container'>
         <Navbar />
        {props.children}
    </div>
  )
}

export default BaseLayout