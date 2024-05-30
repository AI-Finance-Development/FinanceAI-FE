import React from 'react';
import { PieChart } from '@mui/x-charts'
import { ExpenseListModel } from '../../../api/models/expense-list-model';
import { useAtom } from 'jotai';
import { loadingAtom } from '../../../store/global-atoms';
import { ListUserInvestmentsResponseModel } from '../../../api/models/list-user-investments-response-model';

export interface FaiGraphicProps {
    comingData: ExpenseListModel[] | ListUserInvestmentsResponseModel[];
}

const FaiGraphic = ({comingData}: FaiGraphicProps) => {
    const [loading] = useAtom(loadingAtom)
    const data = comingData.map(x => ({ value: x.amount, label:"asd" }));

    return (
        <PieChart
            {...comingData}
            loading={loading}
            series={[
                {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
            ]}
            height={400}
        />
    )
}

export default FaiGraphic