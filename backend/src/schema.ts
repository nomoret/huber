import { GraphQLSchema } from "graphql";
import { IResolvers, makeExecutableSchema } from "graphql-tools";
import { mergeTypeDefs, mergeResolvers } from "graphql-tools";
import { loadFilesSync } from "graphql-tools";
import path from "path";

const allTypes: GraphQLSchema[] = loadFilesSync(
  path.join(__dirname, "./api/**/*.graphql")
);

const allResolvers: IResolvers[] = loadFilesSync(
  path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedTypes = mergeTypeDefs(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers,
});

export default schema;
