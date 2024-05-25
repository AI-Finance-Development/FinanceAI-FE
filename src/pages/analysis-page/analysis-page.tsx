import React, { useEffect, useState } from "react";
import './analysis-page.css'
import { Row, Col, Tabs } from "antd";
import "./analysis-page.css";
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
import { useTranslation } from "react-i18next";
import AdviceList from "../../components/atomics/advice-list/advice-list";


const Analysis = () => {
  const { t } = useTranslation();
  const [userInfo] = useAtom(userInfoAtom);
  const { ExpenseApi, TargetApi } = useAxiosServiceClient();
  const [target, setTarget] = useState<ListUserTargetModel | undefined>(undefined)
  const [expenses, setExpenses] = useState<ExpenseListModel[]>([]);

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
          <div className="body">
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
                      icon: target === undefined
                        ? <TitleWithSubtitle title={t('pages.analysis-page.add-target.title')}
                          subtitle={t('pages.analysis-page.add-target.title')} />
                        : <TitleWithSubtitle title={t('pages.analysis-page.view-target.title')}
                          subtitle={t('pages.analysis-page.view-target.subtitle')} />,
                      children: target === null || target === undefined ?
                        <AddTarget onSuccessAction={() => fetchTarget(userInfo?.id || 1)} />
                        : <ViewTarget data={target!} onSuccessAction={() => { fetchTarget(userInfo?.id || 0) }} />
                    },
                    {
                      key: "2",
                      label: "",
                      icon: <TitleWithSubtitle title={t('pages.analysis-page.ai-comment.title')} subtitle={t('pages.analysis-page.ai-comment.subtitle')} />,
                      children: <AdviceList/>
                    }
                  ]
                }
              />
            </div>
          </div>
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
};

export default Analysis;
