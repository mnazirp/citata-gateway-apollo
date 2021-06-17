const resolvers = {
  Query: {
    users: async (_: any, __: any, opt: any) => {
      let users = await opt.dataSources.ReqresAPI.getUsers();
      return users.data;
    },
  },
};

export default resolvers;
