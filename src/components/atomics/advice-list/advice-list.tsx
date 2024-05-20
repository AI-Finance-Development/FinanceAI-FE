import React from 'react';
import { Divider, List, Typography } from 'antd';
import './advice-list.css'
const AdviceList: React.FC = () => {
  const data = [
    'Liste yazısı 1',
    'Liste yazısı 2',
    'Liste yazısı 3',
    'Liste yazısı 4',
    'Liste yazısı 5',
  ];

  return (
    <div>
      <List className='liste'
        header={<div>Header</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>{item}</List.Item>
        )}
      />
    </div>
  );
};

export default AdviceList;
