import React from 'react'
import './primary-button.css';
import { Button, ButtonProps, ConfigProvider } from 'antd'

interface PrimaryButtonProps extends ButtonProps {
    buttonText: string;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        controlHeight: 40,
                        controlHeightLG: 44,
                        controlHeightSM: 36,
                        // colorPrimary: 'rgb(12, 63, 111)',
                        // colorPrimaryBorder: 'rgb(12, 63, 111)',
                        // colorPrimaryActive: 'rgb(12, 63, 111)',
                        // colorPrimaryHover: 'rgb(255, 255, 255)',
                        defaultBg: "rgb(19, 194, 194)",
                        defaultColor: "rgb(255, 255, 255)"

                    },
                },
            }}
        >
            <Button {...props} className='button'>
                {props.buttonText}
            </Button>
        </ConfigProvider>

    )
}

export default PrimaryButton