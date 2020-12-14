import { Greeting } from "src/types/graphql";

const resolvers = {
  Query: {
    sayHello: (): Greeting => {
      return {
        error: false,
        text: "Hey hello how are you",
      };
    },
  },
};

export default resolvers;
