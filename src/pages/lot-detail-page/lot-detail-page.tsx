import { Col, Row, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import LotCard from '../../page-parts/lot-card/lot-card'
import TitleWithSubtitle from '../../components/atomics/title-with-subtitle/title-with-subtitle'
import { useAxiosServiceClient } from '../../services/axios'
import { useAtom } from 'jotai'
import { messageAtom } from '../../store/global-atoms'
import { ListLotDetailResponseModel } from '../../api/models/list-lot-detail-reponse-model'
import { useParams } from 'react-router-dom'
import { ListAICommentResponseModel } from '../../api/models/list-ai-comment-response-model'

export interface LotDetailPageProps { }

const LotDetailPage = () => {

    const { id } = useParams();
    const [lot, setLot] = useState<ListLotDetailResponseModel | undefined>(undefined)
    const [aiComment, setAIComment] = useState<ListAICommentResponseModel | undefined>(undefined)
    const [, setMessage] = useAtom(messageAtom);
    const { AICommentsApi, LotApi } = useAxiosServiceClient();

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

    const fetchLotDetail = (id: number) => {
        LotApi.getLotDetail(id).then((response) => {
            setLot(response.data.data)
        }).catch((err) => {
            setMessage({ type: "error", message: "Hisse Detayları Listelenemedi" })
        })
    }

    const fetchAIComments = (id: number) => {
        AICommentsApi.getLastComment(id).then((response) => {
            setAIComment(response.data.data)
        }).catch(() => {
            setMessage({
                type: "error",
                message: "Hisse hakkında yapılan yapay zeka yorumu çekilemedi."
            })
        })
    }

    return (
        <Row>
            <Col span={4}></Col>
            <Col span={16}>
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
                                    icon: <TitleWithSubtitle title={"Hisse Hakkında AI"}
                                        subtitle={""} />,
                                    children: <p>{aiComment?.comment}</p>
                                },
                                {
                                    key: "2",
                                    label: "",
                                    icon: <TitleWithSubtitle title={"Hisse Hakkında Haberler"} subtitle={""} />,
                                    children: <p>de</p>
                                },
                                {
                                    key: "3",
                                    label: "",
                                    icon: <TitleWithSubtitle title={"Hisse Hakkında AI"}
                                        subtitle={""} />,
                                    children: <p>asd</p>
                                },
                            ]
                        }
                    />
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}

export default LotDetailPage