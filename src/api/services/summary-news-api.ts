import { BaseApi } from "./base-api";

export class SummaryNewsApi extends BaseApi{

    public async GetSummariesByLotId(id:number){
        return await this.axios.get(`${this.basePath}/summary-news/${id}`);
    }

    public async GetLastSummaries(id:number){
        return await this.axios.get(`${this.basePath}/summary-news/last/${id}`);
    }
}