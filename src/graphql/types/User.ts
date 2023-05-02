import { extendType, objectType } from "nexus";

export const User = objectType({
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
  },
  name: "User",
});

export const UserQuery = extendType({
  definition(t) {
    t.nonNull.list.field("users", {
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany();
      },
      type: "User",
    });
  },
  type: "Query",
});
