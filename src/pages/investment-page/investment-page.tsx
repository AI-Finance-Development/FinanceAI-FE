import React, { useEffect, useState } from 'react'
import './investment-page.css'
import GraphicAnalysis from '../../page-parts/graphic-analysis/graphic-analysis'
import PageLayout from '../../layouts/page-layout/page-layout';
import { useTranslation } from 'react-i18next';
import { messageAtom, userInfoAtom } from '../../store/global-atoms';
import { useAtom } from 'jotai';
import { useAxiosServiceClient } from '../../services/axios';
import { ListUserInvestmentsResponseModel } from '../../api/models/list-user-investments-response-model';
import InvestmentList from '../../page-parts/investment-list/investment-list';

const InvestmentPage = () => {

  const { t } = useTranslation();
  const [userInfo] = useAtom(userInfoAtom);
  const [, setMessage] = useAtom(messageAtom);
  const [investments, setInvestments] = useState<ListUserInvestmentsResponseModel[]>([]);
  const { InvestmentsApi } = useAxiosServiceClient();

  useEffect(() => {
    if (userInfo && userInfo.id) {
      fetchInvestments(userInfo.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo?.id])

  const fetchInvestments = (id: number) => {
    InvestmentsApi.getUserInvestments(id).then((response) => {
      setInvestments(response.data.data)
    }).catch(() => {
      setMessage({
        type: "error"
        , message: "Yatırımlar Listelenemedi"
      })
    })
  }


  return (
    <PageLayout>
      <div className='body'>
        <GraphicAnalysis
          expenses={investments}
          title={t('page.parts.investment-graphic.title')}
          subtitle={t('page.parts.investment-graphic.subtitle')}
        />
        <InvestmentList investments={investments} />
      </div>
    </PageLayout>

  )
}

export default InvestmentPage
