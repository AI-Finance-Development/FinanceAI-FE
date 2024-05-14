import { Row, Image, Col } from "antd";
import React from "react";
import grafik from "../../assets/grafik.png";
import "./analysis-page.css";
import PrimaryButton from "../../components/atomics/primary-button/primary-button";
import SecondaryButton from "../../components/atomics/secondary-button/secondary-button";
const Analysis = () => {
  return (
    <div>
      <Row className="Analiz">
        <Col lg={3}></Col>
        <Col xs={0} sm={0} md={0} lg={9} className="left-c">
          <Image preview={false} src={grafik} alt="grafik" />
        </Col>
        <Col sm={24} md={24} lg={6} className="auth-c">
          <PrimaryButton
            className="buton1"
            buttontext="Hedefleri Gör"
            size="large"
          ></PrimaryButton>
          <PrimaryButton
            className="buton2"
            buttontext="Hedef Oluştur"
          ></PrimaryButton>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </div>
  );
};

export default Analysis;
