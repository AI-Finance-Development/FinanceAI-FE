import React from 'react';
import {  List, ListProps, } from 'antd';
import './advice-list.css';
import { ListAIAdviceResponseModel } from '../../../api/models/list-ai-advices-response-model';

interface AdviceListProps extends ListProps<ListAIAdviceResponseModel>{
  advices: ListAIAdviceResponseModel[]
}

const AdviceList = (props: AdviceListProps) => {

  return (
    <List className='liste'
      header={undefined}
      bordered
      dataSource={props.advices}
      renderItem={(item) => (
          <List.Item className='list-item-style'>{item.advice}</List.Item>
      )}
    />
  );
};

export default AdviceList;
