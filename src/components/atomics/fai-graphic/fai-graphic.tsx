import React from 'react';
import { PieChart } from '@mui/x-charts'
import { useAtom } from 'jotai';
import { loadingAtom } from '../../../store/global-atoms';

export interface FaiGraphicProps {
    comingData: any[];
}

const FaiGraphic = ({comingData}: FaiGraphicProps) => {
    const [loading] = useAtom(loadingAtom)
    const data = comingData.map(x => ({ value: x.amount, label:x.lotCode||x.category  }));

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