import React from 'react'
import './investment-card.css'
import FaiCard from '../../components/atomics/fai-card/fai-card'
import { ReactComponent as DollarSVG } from '../../assets/svgs/dollar.svg';
import PrimaryButton from '../../components/atomics/primary-button/primary-button';
import { useNavigate } from 'react-router-dom';

const InvestmentCard = () => {
    const navigate = useNavigate()
    
    return (
        <FaiCard style={{width:"70%"}}>
            <>
                <DollarSVG />
                <span className='card-message'>Yatırım Özeti ve Hedeflerin</span>
                <PrimaryButton buttontext='Hemen Gör' size='large' onClick={()=>{navigate('/analysis')}}/>
            </>
        </FaiCard>
    )
}

export default InvestmentCard