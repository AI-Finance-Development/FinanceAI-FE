import React, { useState } from "react";
import "./auth-part.css";
import { Space } from "antd";
import PrimaryButton from "../../components/atomics/primary-button/primary-button";
import Divider from "../../components/atomics/divider/divider";
import SecondaryButton from "../../components/atomics/secondary-button/secondary-button";
import { GoogleOutlined } from '@ant-design/icons';
import LogInModal from "../../components/modals/log-in-modal/log-in-modal";

const AuthPart = () => {

    const [isOpenLoginModal, setOpenLogInModal] = useState(false);

    return (
        <div className="right-container">
            <div className="header-title">
                <span className="sp1">
                    HEMEN <span className="sp2">HEDEFLERİNE</span> BAŞLA
                </span>
            </div>
            <div className="header-body">
                    <Space direction="vertical" size={"small"}>
                        <SecondaryButton className="buttons" icon={<GoogleOutlined />} buttontext="Google ile giriş yap"></SecondaryButton>
                        <Divider />
                        <SecondaryButton className="buttons" buttontext="Hesap Oluştur"></SecondaryButton>
                    </Space>
                <div className="right-footer">
                    <span>Zaten hesabın var mı?</span>
                    <PrimaryButton buttontext="Giriş yap" onClick={()=>{setOpenLogInModal(true)}}></PrimaryButton>
                </div>
            </div>
            <LogInModal open={isOpenLoginModal} />
        </div>
    );
};

export default AuthPart;
