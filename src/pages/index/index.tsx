import React from 'react'
import './index.css';
import HowItWorks from '../../page-parts/how-it-works/how-it-works';
import Startpage from '../../page-parts/start-page/start-page';
import Analysis from '../../page-parts/analysis/Analysis';


const Index = () => {
  return ( 
    <>
   <Analysis/>
   <Startpage/> 
   <br></br>
   <br></br>
   <br></br>
    <HowItWorks />
    <br></br>
   <br></br>
   <br></br>
    </>
  )
}

export default Index