import React from 'react'
import './target-card.css'
import FaiCard from '../../components/atomics/fai-card/fai-card'
import PrimaryButton from '../../components/atomics/primary-button/primary-button'
import { useTranslation } from 'react-i18next'

export interface TargetCardProps {
    onClickFirstButton: () => void;
    onClickSecondButton: () => void;
}

const TargetCard = (props: TargetCardProps) => {

    const { t } = useTranslation();

    return (
        <FaiCard style={{ width: "80%", }} className='analysis-card'>
            <>
                <PrimaryButton buttontext={t('page-parts.analysis-card.button1')} size='large' onClick={props.onClickFirstButton} />
                <PrimaryButton buttontext={t('page-parts.analysis-card.button2')} onClick={props.onClickSecondButton}
                    size='large' />
            </>
        </FaiCard>
    )
}

export default TargetCard

