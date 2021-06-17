import { RESTDataSource } from "apollo-datasource-rest";

export class ReqresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://reqres.in/api`;
  }

  getUsers() {
    let u = this.get(`/users?page=2`);
    return u;
  }
}
