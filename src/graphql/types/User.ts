import { objectType } from "nexus";

export const User = objectType({
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
  },
  name: "User",
});
