import { Flex, Image, List, Space } from 'antd'
import React from 'react'
import './investment-list.css'
import TitleWithSubtitle from '../../components/atomics/title-with-subtitle/title-with-subtitle'
import FaiList from '../../components/atomics/fai-list/fai-list'
import VirtualList from 'rc-virtual-list';
import { useTranslation } from 'react-i18next';
import { useAtom } from 'jotai';
import { loadingAtom } from '../../store/global-atoms';
import { ListUserInvestmentsResponseModel } from '../../api/models/list-user-investments-response-model';
import thy from '../../assets/thy-logo.png';
import aselsan from '../../assets/aselsan-logo.png';
import tuprs from '../../assets/tupras-logo.png';
import doas from '../../assets/doas-logo.png';
import pgss from '../../assets/pgss.png';
import { useNavigate } from 'react-router-dom'

interface InvestmentListProps {
    investments: ListUserInvestmentsResponseModel[];
}

const InvestmentList = ({ investments }: InvestmentListProps) => {

    const navigate = useNavigate();
    const { t } = useTranslation();
    const [loading] = useAtom(loadingAtom)


    return (
        <Space direction='vertical' style={{ width: "80%" }} size={'large'}>
            <TitleWithSubtitle title={t('page-parts.investment-list.title')} subtitle={t('page-parts.investment-list.subtitle')} />
            <FaiList loading={loading}>
                <VirtualList
                    data={investments}
                    height={400}
                    itemHeight={47}
                    itemKey="value"
                >
                    {(item: ListUserInvestmentsResponseModel) => (
                        <List.Item key={item.value}>
                            <List.Item.Meta
                                title={
                                    <Flex gap={"1rem"} onClick={()=>{navigate(`/lot/${item.lotId}`)}}>
                                        <Image src={item.lotCode === 'THYAO' ? thy : item.lotCode === 'DOAS' ? doas : item.lotCode === 'ASELSN' ? aselsan : item.lotCode === 'PGSUS' ? pgss : tuprs}
                                            preview={false} height={"50px"} width={"50px"} />
                                        <Space direction='vertical' size={"small"}>
                                            <span className='listItemTitle'>{item.lotCompany}</span>
                                            <span className='listItemSubtitle'>{item.lotCode}</span>
                                        </Space>
                                    </Flex>
                                }
                            />
                            <div><span>Toplam Değer: </span>{item.amount * item.value} ₺</div>
                        </List.Item>
                    )}
                </VirtualList>
            </FaiList>
        </Space>)
}

export default InvestmentList