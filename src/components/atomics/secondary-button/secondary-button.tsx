import React from "react";
import "./secondary-button.css";
import { Button, ButtonProps, ConfigProvider } from "antd";

interface SecondaryButtonProps extends ButtonProps {
    buttontext: string;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        borderRadius: 15,
                        primaryColor: "rgb(255, 255, 255)",
                        colorPrimary: "rgb(40, 52, 82)",
                        colorPrimaryHover: "rgb(77, 94, 137)",
                        defaultBg: "rgb(255, 255, 255)",
                        defaultColor: "rgba(0, 0, 0, 0.88)",
                        defaultBorderColor: "rgb(255, 255, 255)",
                        defaultHoverBg: "rgb(85, 98, 131)",
                        defaultHoverBorderColor: "rgb(76, 91, 126)",
                        defaultHoverColor: "rgb(255, 255, 255)",
                    },
                },
            }}
        >
            <Button {...props} className="button" size="large">
                {props.buttontext}
            </Button>
        </ConfigProvider>
    );
};

export default SecondaryButton;
