import { BaseApi } from "./base-api";

export class ExpenseApi extends BaseApi{
    
    public async GetAll(id:number){
        return await this.axios.get(`${this.basePath}/expense?id=${id}`)
    }
}