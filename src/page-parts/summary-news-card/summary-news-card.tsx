import React from 'react'
import './summary-news-card.css'
import { ListSummaryNewsResponseModel } from '../../api/models/list-summary-news-response-model'

interface SummaryNewsCardProps{
    data: ListSummaryNewsResponseModel;
}

const SummaryNewsCard = ({data}:SummaryNewsCardProps) => {
  return (
    <div className='summary-container'>
        <span style={{fontSize:"1.25rem",fontWeight:"500"}}>{data.summary}</span>
    </div>
  )
}

export default SummaryNewsCard