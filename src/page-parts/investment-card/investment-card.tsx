import React from 'react'
import './investment-card.css'
import FaiCard from '../../components/atomics/fai-card/fai-card'
import { ReactComponent as DollarSVG } from '../../assets/svgs/dollar.svg';
import PrimaryButton from '../../components/atomics/primary-button/primary-button';

const InvestmentCard = () => {
    return (
        <FaiCard style={{width:"70%"}}>
            <div className='card-container'>
                <DollarSVG />
                <span className='card-message'>Yatırım Özeti ve Hedeflerin</span>
                <PrimaryButton buttontext='Hemen Gör' size='large' />
            </div>
        </FaiCard>
    )
}

export default InvestmentCard