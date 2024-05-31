import React from 'react'
import './graphic-analysis.css'
import { Col, Row } from 'antd'
import FaiGraphic from '../../components/atomics/fai-graphic/fai-graphic'
import { ExpenseListModel } from '../../api/models/expense-list-model'
import TitleWithSubtitle from '../../components/atomics/title-with-subtitle/title-with-subtitle';
import { ListUserInvestmentsResponseModel } from '../../api/models/list-user-investments-response-model'

export interface GraphicAnalysisProps {
    expenses: ExpenseListModel[] | ListUserInvestmentsResponseModel[];
    title:string;
    subtitle:string;
}

const GraphicAnalysis = (props: GraphicAnalysisProps) => {
    return (
        <div className='graphic-analysis-container'>
            <TitleWithSubtitle title={props.title} subtitle={props.subtitle}/>
            <Row justify={'space-between'}>
                <Col span={20}>
                    <FaiGraphic comingData={props.expenses} />
                </Col>           
            </Row>
        </div>
    )
}

export default GraphicAnalysis