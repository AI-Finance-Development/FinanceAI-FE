import { BaseApi } from "./base-api";

export class NewsApi extends BaseApi {
  public async GetNewsByLotId(id: number) {
    return await this.axios.get(`${this.basePath}/news/${id}`);
  }
}
