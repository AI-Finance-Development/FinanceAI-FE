import React from "react";
import "./home-page.css";
import { Col, Row } from "antd";
import InvestmentCard from "../../page-parts/investment-card/investment-card";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const {t} = useTranslation();
  const navigate = useNavigate()

  return (
    <Row className="home-container">
      <Col sm={0} lg={4}></Col>
      <Col sm={24} lg={8} style={{ display: "flex", justifyContent: "center" }}>
        <InvestmentCard title='Harcama Analizi' onClick={()=>{navigate('/analysis')}}/>
      </Col>
      <Col sm={24} lg={8} style={{ display: "flex", justifyContent: "center" }}>
        <InvestmentCard title={t('investment.summary-and-goals')} onClick={()=>navigate('/investment')}/>
      </Col>
      <Col sm={0} lg={4}></Col>
    </Row>
  );
};

export default HomePage;
