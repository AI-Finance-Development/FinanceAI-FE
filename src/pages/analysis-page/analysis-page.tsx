import { Row, Image, Col } from "antd";
import React, { useState } from "react";
import grafik from "../../assets/grafik.png";
import "./analysis-page.css";
import TargetCard from "../../page-parts/target-card/target-card";
import AddTargetModal from "../../components/modals/add-target-modal/add-target-modal";

const Analysis = () => {

  const [isOpenAddTargetModal, setOpenAddTargetModal] = useState<boolean>(false);

  return (
    <>
      <Row className="Analiz">
        <Col lg={3}></Col>
        <Col xs={0} sm={0} md={0} lg={9} className="left-c">
          <Image preview={false} src={grafik} alt="grafik" />
        </Col>
        <Col sm={24} md={24} lg={6}>
          <TargetCard onClickFirstButton={() => { setOpenAddTargetModal(true) }} onClickSecondButton={() => { console.log("doki") }} />
        </Col>
        <Col lg={3}></Col>
      </Row>
      <AddTargetModal open={isOpenAddTargetModal} onCancel={() => { setOpenAddTargetModal(false) }} />
    </>
  );
};

export default Analysis;
