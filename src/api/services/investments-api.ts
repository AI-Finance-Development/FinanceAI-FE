import { BaseApi } from "./base-api";

export class InvestmentsApi extends BaseApi{

    public async getUserInvestments(id:number){
       return await this.axios.get(`${this.basePath}/investments/${id}`)
    }
}