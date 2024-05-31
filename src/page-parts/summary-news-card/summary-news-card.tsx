import React from 'react'
import './summary-news-card.css'
import { ListSummaryNewsResponseModel } from '../../api/models/list-summary-news-response-model'

interface SummaryNewsCardProps{
    data: ListSummaryNewsResponseModel;
}

const SummaryNewsCard = ({data}:SummaryNewsCardProps) => {
  return (
    <div className='summary-container'>
        <span>{data.summary}</span>
    </div>
  )
}

export default SummaryNewsCard