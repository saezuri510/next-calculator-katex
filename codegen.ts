import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  documents: "./src/graphql/query-controllers/**/*.ts",
  generates: {
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./src/graphql/generated/": {
      plugins: [],
      preset: "client",
    },
  },
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
};

export default config;
