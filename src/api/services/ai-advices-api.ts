import { BaseApi } from "./base-api";

export class AIAdvicesApi extends BaseApi {
  public async GetAdvices(id: number) {
    return await this.axios.get(`${this.basePath}/advices/${id}`);
  }
}
