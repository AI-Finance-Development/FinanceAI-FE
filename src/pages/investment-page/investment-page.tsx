import React, { useState } from 'react'
import ExpenseList from '../../page-parts/expense-list/expense-list'
import GraphicAnalysis from '../../page-parts/graphic-analysis/graphic-analysis'
import { ExpenseListModel } from "../../api/models/expense-list-model";
import Securenavbar from '../../layouts/secure-navbar/secure-navbar';
import { Col, Row } from 'antd';
const InvestmentPage = () => {
    const [expenses, setExpenses] = useState<ExpenseListModel[]>([]);
  return (
    <div>
        
        <Securenavbar/>
        <Row>
        <Col span={4}></Col>
        <Col span={16} >
       <ExpenseList expenses={[...expenses, ...expenses, ...expenses]} />
            <GraphicAnalysis expenses={expenses} />
            </Col>
            <Col span={4}></Col>
            </Row>
    </div>
  )
}

export default InvestmentPage
