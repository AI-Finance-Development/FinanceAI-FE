import React from 'react'

import './danger-button.css';
import { Button, ButtonProps, ConfigProvider } from 'antd'

interface DangerbuttonProps extends ButtonProps {
    buttontext: string;
}

const Dangerbutton = (props: DangerbuttonProps) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        controlHeight: 40,
                        controlHeightLG: 44,
                        controlHeightSM: 36,
                        borderRadius: 15,
                        defaultBg: "rgb(228, 10, 10)",
                        defaultColor: "rgba(255, 255, 255, 0.88)",
                        defaultHoverBg: "red",
                        defaultHoverColor: "rgb(255, 255, 255)"
                    },
                },
            }}
        >
            <Button {...props} className='button' size='large'>
                {props.buttontext}
            </Button>
        </ConfigProvider>
    )
}

export default Dangerbutton
