import React, { useEffect, useState } from 'react'
import { Col, Row, Tabs } from 'antd'
import LotCard from '../../page-parts/lot-card/lot-card'
import TitleWithSubtitle from '../../components/atomics/title-with-subtitle/title-with-subtitle'
import { useAxiosServiceClient } from '../../services/axios'
import { useAtom } from 'jotai'
import { messageAtom } from '../../store/global-atoms'
import { ListLotDetailResponseModel } from '../../api/models/list-lot-detail-reponse-model'
import { useNavigate, useParams } from 'react-router-dom'
import { ListAICommentResponseModel } from '../../api/models/list-ai-comment-response-model'
import PageLayout from '../../layouts/page-layout/page-layout'
import { useTranslation } from 'react-i18next'
import { ListSummaryNewsResponseModel } from '../../api/models/list-summary-news-response-model'
import { ListNewsByLotIdResponseModel } from '../../api/models/list-news-by-lot-id-response-model'
import SummaryNewsCard from '../../page-parts/summary-news-card/summary-news-card'
import FooterCard from '../../components/atomics/footer-card/footer-card'

export interface LotDetailPageProps { }

const LotDetailPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { t } = useTranslation();
    const [lots, setLots] = useState<ListLotDetailResponseModel[]>([])
    const [lot, setLot] = useState<ListLotDetailResponseModel | undefined>(undefined);
    const [news, setNews] = useState<ListNewsByLotIdResponseModel[]>([])
    const [summaryNews, setSummaryNews] = useState<ListSummaryNewsResponseModel[]>([]);
    const [aiComment, setAIComment] = useState<ListAICommentResponseModel | undefined>(undefined)
    const [, setMessage] = useAtom(messageAtom);
    const { AICommentsApi, LotApi, SummaryNewsApi, NewsApi } = useAxiosServiceClient();

    useEffect(() => {
        if (id) {
            fetchLotDetail(Number(id))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        if (id) {
            fetchAIComments(Number(id))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        if (id) {
            fetchNewsByLotId(Number(id))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        if (news.length > 0)
            fetchSummaryNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [news])

    useEffect(() => {
        fetchLots()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchLotDetail = (id: number) => {
        LotApi.GetLotDetail(id).then((response) => {
            setLot(response.data.data)
        }).catch((err) => {
            setMessage({
                type: "error",
                message: t('messages.error.list-ai-comment')
            })
        })
    }

    const fetchAIComments = (id: number) => {
        AICommentsApi.getLastComment(id).then((response) => {
            setAIComment(response.data.data)
        }).catch(() => {
            setMessage({
                type: "error",
                message: t('messages.error.list-ai-comment')
            })
        })
    }

    const fetchSummaryNews = () => {
        news.forEach(x => SummaryNewsApi.GetLastSummaries(x.id).then((response) => {
            setSummaryNews((state) => [...state, response.data.data])
        }).catch(() => {
            setMessage({ type: "error", message: "Haberler Listelenemedi" })
        }))
    }

    const fetchNewsByLotId = (id: number) => {
        NewsApi.GetNewsByLotId(id).then((response) => {
            setNews(response.data.data)
        }).catch(() => {
            setMessage({ type: "error", message: "Haberler Listelenemedi" })
        })
    }

    const fetchLots = () => {
        LotApi.GetLots().then((response) => {
            setLots(response.data.data)
        }).catch(() => {
            setMessage({ type: "error", message: "Hisseler Listelenemedi" })
        })
    }

    return (
        <PageLayout>
            <>
                {
                    lot && <LotCard lot={lot} />
                }
                <div>
                    <Tabs
                        defaultActiveKey="1"
                        items={
                            [
                                {
                                    key: "1",
                                    label: "",
                                    icon: <TitleWithSubtitle title={`What is saying AI about ${lot?.code}`}
                                        subtitle={""} />,
                                    children: <div>
                                        <p style={{fontSize:"1.25rem",fontWeight:"500"}}>{aiComment?.comment}</p>
                                        <div>
                                            <h2 style={{marginTop:"3rem"}}>Check out other stocks</h2>
                                            <Row gutter={16}>
                                                {lots.filter(option => option.code !== lot?.code).map((x => (
                                                    <Col span={8}>
                                                        <FooterCard title={x.company} subtitle={x.code} action={() => { navigate(`/lot/${x.id}`) }} />
                                                    </Col>
                                                )))}

                                            </Row>
                                        </div>
                                    </div>
                                },
                                {
                                    key: "2",
                                    label: "",
                                    icon: <TitleWithSubtitle title={`News and analysis about ${lot?.code}`} subtitle={""} />,
                                    children: <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                        {
                                            summaryNews && summaryNews.map(summary => (
                                                <SummaryNewsCard data={summary} />
                                            ))
                                        }
                                    </div>
                                },
                            ]
                        }
                    />
                </div>
            </>
        </PageLayout>
    )
}

export default LotDetailPage