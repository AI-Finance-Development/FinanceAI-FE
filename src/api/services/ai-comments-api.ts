import { BaseApi } from "./base-api";

export class AICommentsApi extends BaseApi {
  public async getLastComment(id: number) {
    return await this.axios.post(`${this.basePath}/auth/ai-comments/${id}`);
  }
}
