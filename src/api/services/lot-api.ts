import { BaseApi } from "./base-api";

export class LotApi extends BaseApi{
    public async getLotDetail(id:number){
       return await this.axios.get(`${this.basePath}/lot/${id}`)
    }
}