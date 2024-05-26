import { BaseApi } from "./base-api";

export class AICommentsApi extends BaseApi {
  public async getLastComment(id: number) {
    return await this.axios.get(`${this.basePath}/ai-comments/${id}`);
  }
}
