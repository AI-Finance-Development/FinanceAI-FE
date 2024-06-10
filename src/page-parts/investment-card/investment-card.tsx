import React from 'react'
import './investment-card.css'
import FaiCard from '../../components/atomics/fai-card/fai-card'
import { ReactComponent as DollarSVG } from '../../assets/svgs/dollar.svg';
import PrimaryButton from '../../components/atomics/primary-button/primary-button';
import { useTranslation } from 'react-i18next'

interface InvestmentCardProps{
    title:string;
    onClick:()=>void;
}

const InvestmentCard = (props:InvestmentCardProps) => {
    const { t } = useTranslation();
    return (
        <FaiCard style={{width:"70%"}}>
            <>
                <DollarSVG />
                <span className='card-message'>{props.title}</span>
                <PrimaryButton buttontext={t('button.view-now')} size='large' onClick={props.onClick}/>
            </>
        </FaiCard>
    )
}

export default InvestmentCard
