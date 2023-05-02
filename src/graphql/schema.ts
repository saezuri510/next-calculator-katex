import { join } from "path";

import { makeSchema } from "nexus";

import * as types from "./types";

export const schema = makeSchema({
  contextType: {
    export: "Context",
    module: join(process.cwd(), "src", "graphql", "context.ts"),
  },
  outputs: {
    schema: join(process.cwd(), "src", "graphql", "schema.graphql"),
    typegen: join(process.cwd(), "node_modules", "@types", "nexus-typegen", "index.d.ts"),
  },
  types,
});
