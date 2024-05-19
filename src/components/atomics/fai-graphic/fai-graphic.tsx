import React from 'react';
import { PieChart, } from '@mui/x-charts'
import { ExpenseListModel } from '../../../api/models/expense-list-model';
import { useAtom } from 'jotai';
import { loadingAtom } from '../../../store/global-atoms';

export interface FaiGraphicProps {
    expenses: ExpenseListModel[];
}

const FaiGraphic = (props: FaiGraphicProps) => {
    const [loading] = useAtom(loadingAtom)
    const data = props.expenses.map(x => ({ value: x.amount, label: x.category }));

    return (
        <PieChart
            {...props}
            loading={loading}
            series={[
                {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
            ]}
            height={300}
        />
    )
}

export default FaiGraphic