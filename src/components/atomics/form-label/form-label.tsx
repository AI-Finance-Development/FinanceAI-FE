import React from 'react'
import './form-label.css'

interface LabelWithFormItemProps {
  label: string;
  children: JSX.Element;
}

const FormLabel = (props: LabelWithFormItemProps) => {
  return (
    <div>
      <span className='label'>
        {props.label}
      </span>
      {props.children}
    </div>
  )
}

export default FormLabel