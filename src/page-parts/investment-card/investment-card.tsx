import React from 'react'
import './investment-card.css'
import FaiCard from '../../components/atomics/fai-card/fai-card'
import { ReactComponent as DollarSVG } from '../../assets/svgs/dollar.svg';
import PrimaryButton from '../../components/atomics/primary-button/primary-button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const InvestmentCard = () => {
    const navigate = useNavigate()
    const { t } = useTranslation();
    return (
        <FaiCard style={{width:"70%"}}>
            <>
                <DollarSVG />
                <span className='card-message'>{t('investment.summary-and-goals')}</span>
                <PrimaryButton buttontext={t('button.view-now')} size='large' onClick={()=>{navigate('/analysis')}}/>
            </>
        </FaiCard>
    )
}

export default InvestmentCard
