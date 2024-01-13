import { Resolvers, User } from "@graphql"
import UserModel from "../models/users"

const resolvers: Resolvers = {
  Query: {
    users: async () => {
      return await UserModel.find()
    },
  },
  Mutation: {
    createUser: async (_, args): Promise<User> => {
      const user = new UserModel(args)
      return await user.save()
    },
    updateUser: async (_, args): Promise<User | null> => {
      const user = await UserModel.findByIdAndUpdate(args.uid, args, {
        new: true,
      })
      return user
    },
    deleteUser: async (_, args): Promise<User | null> => {
      const user = await UserModel.findOneAndDelete({ uid: args.uid })
      return user
    },
  },
}
export default resolvers
