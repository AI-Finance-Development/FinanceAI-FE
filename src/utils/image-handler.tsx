import React from 'react'
import thy from '../assets/thy-logo.png';
import doas from '../assets/doas-logo.png';
import tuprs from '../assets/tupras-logo.png';
import aselsan from '../assets/aselsan-logo.png';
import pgsus from '../assets/pgss.png';
import { Image, ImageProps } from 'antd';

interface ImageHandlerProps extends ImageProps{
    code:string;
}

const ImageHandler = (props:ImageHandlerProps) => {
  return (
    <Image src={
        props.code === 'THYAO' ? thy :
        props.code === 'PGSUS' ? pgsus:
        props.code === 'DOAS' ? doas:
        props.code === 'TUPRS' ? tuprs:
        aselsan 
    }
    height={"50 px"}
    width={"50px"}
    {...props}
    />
  )
}

export default ImageHandler