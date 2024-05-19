import React, { useEffect, useState } from "react";
import './analysis-page.css'
import { Row, Col, Tabs } from "antd";
import "./analysis-page.css";
import AddTargetModal from "../../components/modals/add-target-modal/add-target-modal";
import { useAxiosServiceClient } from "../../services/axios";
import { useAtom } from "jotai";
import { userInfoAtom } from "../../store/global-atoms";
import { ExpenseListModel } from "../../api/models/expense-list-model";
import ExpenseList from "../../page-parts/expense-list/expense-list";
import GraphicAnalysis from "../../page-parts/graphic-analysis/graphic-analysis";
import TitleWithSubtitle from "../../components/atomics/title-with-subtitle/title-with-subtitle";
import AddTarget from "../../page-parts/add-target/add-target";
import { ListUserTargetModel } from "../../api/models/list-user-target-model";
import ViewTarget from "../../page-parts/view-target/view-target";


const Analysis = () => {
  const [userInfo] = useAtom(userInfoAtom);
  const { ExpenseApi, TargetApi } = useAxiosServiceClient();
  const [target, setTarget] = useState<ListUserTargetModel | undefined>(undefined)
  const [expenses, setExpenses] = useState<ExpenseListModel[]>([]);
  const [isOpenAddTargetModal, setOpenAddTargetModal] = useState<boolean>(false);

  useEffect(() => {
    if (userInfo && userInfo.id) {
      fetchTarget(userInfo.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo?.id])

  useEffect(() => {
    if (userInfo && userInfo.id) {
      fetchExpenses(userInfo.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo?.id])

  const fetchTarget = (id: number) => {
    TargetApi.GetUserTarget(id).then((response) => {
      setTarget(response.data.data)
    }).catch(() => { console.log("err fetch target") })
  }

  const fetchExpenses = (id: number) => {
    ExpenseApi.GetAll(id).then((response) => {
      setExpenses(response.data.data)
    }).catch((err) => {
      console.log("err analysis: ", err)
    })
  }

  return (
    <>
      <Row className="analysis-container">
        <Col span={4}></Col>
        <Col span={16} >
          <div style={{ width: "100%", padding: "2rem 0", gap: "3rem" }}>
            <ExpenseList expenses={[...expenses, ...expenses, ...expenses]} />
            <GraphicAnalysis expenses={expenses} />
            <div>
              <Tabs
                defaultActiveKey="1"
                items={
                  [
                    {
                      key: "1",
                      label: "",
                      icon: target === undefined ? <TitleWithSubtitle title="Hedef Oluştur" subtitle="Harcamalarından tasarruf etmek mi istiyorsun? O zaman hedef oluştur." /> : <TitleWithSubtitle title="Hedefini İncele" subtitle="Harcamalarından tasarruf etmek mi istiyorsun? O zaman hedef oluştur." />,
                      children: target === undefined ? <AddTarget onSuccessAction={()=>fetchTarget(userInfo?.id||1)}/> : <ViewTarget data={target || { amount: 15, loadDate: "str", userId: 1 }} />
                    },
                    {
                      key: "2",
                      label: "",
                      icon: <TitleWithSubtitle title="AI Tavsiyelerini Gör" subtitle="Harcamalarından tasarruf etmek için tavsiyleri gör." />,
                      children: <p>de</p>
                    }
                  ]
                }
              />
            </div>
          </div>
        </Col>
        <Col span={4}></Col>
      </Row>
      <AddTargetModal open={isOpenAddTargetModal} onCancel={() => { setOpenAddTargetModal(false) }} />
    </>
  );
};

export default Analysis;
