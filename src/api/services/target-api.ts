import { UpdateTargetRequestModel } from "../models/update-target-request-model";
import { AddTargetRequestModel } from "./../models/add-target-request-model";
import { BaseApi } from "./base-api";

export class TargetApi extends BaseApi {
  public async Add(data: AddTargetRequestModel) {
    return await this.axios.post(this.basePath + "/target", data);
  }

  public async GetUserTarget(id: number) {
    return await this.axios.get(`${this.basePath}/target/${id}`);
  }

  public async Update(data: UpdateTargetRequestModel) {
    return await this.axios.put(this.basePath + "/target", data);
  }

  public async Delete(id: number) {
    return await this.axios.delete(`${this.basePath}/target/${id}`);
  }
}
