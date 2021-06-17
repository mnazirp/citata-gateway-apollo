import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    first_name: String
    last_name: String
    avatar: String
  }

  type Query {
    users: [User]
  }
`;

export default typeDefs;
