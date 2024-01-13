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
    // updateUser: async (_, args): Promise<User | null> => {
    //   const user = await UserModel.findByIdAndUpdate(args.id, args, {
    //     new: true,
    //   })
    //   return user
    // },
    // deleteUser: async (_, args): Promise<User | null> => {
    //   const user = await UserModel.findByIdAndDelete(args.id)
    //   return user
    // },
  },
}
export default resolvers
