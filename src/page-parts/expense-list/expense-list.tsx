import React from 'react'
import FaiList from '../../components/atomics/fai-list/fai-list'
import { ExpenseListModel } from '../../api/models/expense-list-model';
import { useAtom } from 'jotai';
import { loadingAtom } from '../../store/global-atoms';
import { List, Space } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useTranslation } from 'react-i18next';
import TitleWithSubtitle from '../../components/atomics/title-with-subtitle/title-with-subtitle';


export interface ExpenseListProps {
    expenses: ExpenseListModel[];
}

const ExpenseList = (props: ExpenseListProps) => {

    const { t } = useTranslation();
    const [loading] = useAtom(loadingAtom)

    return (
        <Space direction='vertical' style={{ width: "80%" }} size={'large'}>
            <TitleWithSubtitle title={t('page-parts.expense-list.title')} subtitle={t('page-parts.expense-list.subtitle')} />
            <FaiList loading={loading}>
                <VirtualList
                    data={props.expenses}
                    height={400}
                    itemHeight={47}
                    itemKey="email"
                >
                    {(item: ExpenseListModel) => (
                        <List.Item key={item.category}>
                            <List.Item.Meta
                                title={<span >{item.location}</span>}
                                description={item.description}
                            />
                            <div>{item.amount} ₺</div>
                        </List.Item>
                    )}
                </VirtualList>
            </FaiList>
        </Space>
    )
}

export default ExpenseList