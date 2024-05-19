import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./analysis-page.css";
import TargetCard from "../../page-parts/target-card/target-card";
import AddTargetModal from "../../components/modals/add-target-modal/add-target-modal";
import { useAxiosServiceClient } from "../../services/axios";
import { useAtom } from "jotai";
import { userInfoAtom } from "../../store/global-atoms";
import FaiGraphic from "../../components/atomics/fai-graphic/fai-graphic";
import { ExpenseListModel } from "../../api/models/expense-list-model";
import FaiList from "../../components/atomics/fai-list/fai-list";

const Analysis = () => {

  const [userInfo] = useAtom(userInfoAtom);
  const { ExpenseApi } = useAxiosServiceClient();
  const [expenses, setExpenses] = useState<ExpenseListModel[]>([]);
  const [isOpenAddTargetModal, setOpenAddTargetModal] = useState<boolean>(false);

  useEffect(() => {
    if (userInfo && userInfo.id) {
      ExpenseApi.GetAll(userInfo.id).then((response) => {
        setExpenses(response.data.data)
      }).catch((err) => {
        console.log("err analysis: ", err)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo?.id])

  return (
    <>
      <Row className="Analiz">
        <Col lg={3}></Col>

        <Col xs={0} sm={0} md={12} lg={9} className="left-c">
          <FaiList expenses={[...expenses, ...expenses, ...expenses]} />
          {/* <FaiGraphic expenses={expenses} /> */}
        </Col>
        <Col sm={24} md={24} lg={9}>
          {/* <TargetCard onClickFirstButton={() => { setOpenAddTargetModal(true) }} onClickSecondButton={() => { console.log("doki") }} /> */}
          <FaiGraphic expenses={expenses} />

        </Col>
        <Col lg={3}></Col>
      </Row>
      <AddTargetModal open={isOpenAddTargetModal} onCancel={() => { setOpenAddTargetModal(false) }} />
    </>
  );
};

export default Analysis;
