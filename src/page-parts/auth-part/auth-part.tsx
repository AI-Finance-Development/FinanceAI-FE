import React from "react";
import "./auth-part.css";
import { Space } from "antd";
import PrimaryButton from "../../components/primary-button/primary-button";
import Divider from "../../components/divider/divider";
import SecondaryButton from "../../components/secondary-button/secondary-button";
import { GoogleOutlined } from '@ant-design/icons';

const AuthPart = () => {
    return (
        <div className="right-container">
            <div className="header-title">
                <span className="sp1">
                    HEMEN <span className="sp2">HEDEFLERİNE</span> BAŞLA
                </span>
            </div>
            <div className="header-body">
                    <Space direction="vertical" size={"small"}>
                        <SecondaryButton className="buttons" icon={<GoogleOutlined />} buttonText="Google ile giriş yap"></SecondaryButton>
                        <Divider />
                        <SecondaryButton className="buttons" buttonText="Hesap Oluştur"></SecondaryButton>
                    </Space>
                <div className="right-footer">
                    <span>Zaten hesabın var mı?</span>
                    <PrimaryButton buttonText="Giriş yap"></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AuthPart;
