import User from "src/entities/User";
import { UpdateMyProfileMutationArgs } from "src/types/graphql";
import { Resolvers } from "src/types/resolvers";
import cleanNullArgs from "src/utils/cleanNullArgs";
import privateResolver from "src/utils/resolverMiddleware";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(
      async (_, args: UpdateMyProfileMutationArgs, { req }) => {
        const user: User = req.user;
        const notNull: any = cleanNullArgs(args);

        try {
          if (args.password !== null) {
            user.password = args.password;
            user.save();
            delete notNull.password;
          }
          await User.update({ id: user.id }, { ...notNull });
          return {
            ok: true,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
