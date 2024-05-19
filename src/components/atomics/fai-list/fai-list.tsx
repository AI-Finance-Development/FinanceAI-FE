import React from 'react'
import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import { ExpenseListModel } from '../../../api/models/expense-list-model';
import { useAtom } from 'jotai';
import { loadingAtom } from '../../../store/global-atoms';

export interface FaiListProps {
    expenses: ExpenseListModel[];
}

const ContainerHeight = 400;

const FaiList = (props: FaiListProps) => {
    const [loading] = useAtom(loadingAtom)

    return (
        <List style={{ width: "100%" }} loading={loading}> 
            <VirtualList
                data={props.expenses}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="email"
            >
                {(item: ExpenseListModel) => (
                    <List.Item key={item.category}>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.location}</a>}
                            description={item.description}
                        />
                        <div>{item.amount} ₺</div>
                    </List.Item>
                )}
            </VirtualList>
        </List>
    )
}

export default FaiList