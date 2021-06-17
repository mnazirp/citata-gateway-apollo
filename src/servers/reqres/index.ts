import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { ReqresAPI } from "../../datasources/reqres.api";

class Server {
  constructor(_app: any) {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => {
        return {
          ReqresAPI: new ReqresAPI(),
        };
      },
    });

    server.applyMiddleware({
      app: _app,
      path: "/reqres",
    });
  }
}

export default Server;
