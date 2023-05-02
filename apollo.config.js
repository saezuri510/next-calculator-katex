module.exports = {
  client: {
    excludes: ["src/graphql/schema.graphql"],
    service: {
      includes: ["src/**/*.ts{,x}"],
      localSchemaFile: "src/graphql/schema.graphql",
      name: "next-calculator-katex",
    },
  },
};
