import { AddTargetRequestModel } from './../models/add-target-request-model';
import { BaseApi } from "./base-api";

export class TargetApi extends BaseApi{

    public async Add(data:AddTargetRequestModel){
        return await this.axios.post(this.basePath+'/target',data);
    }

    public async GetUserTarget(id:number){
        return await this.axios.get(`${this.basePath}/target/${id}`);
    }
    
}
