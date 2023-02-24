import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://rickandmortyapi.com/graphql",
  documents: "./src/**/*.graphql",
  generates: {
    "./src/graphql/client.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: {
          endpoint: "https://rickandmortyapi.com/graphql",
          fetchParams: {
            headers: {
              "Content-Type": "application/json",
            },
          },
        },
        addInfiniteQuery: true,
        legacyMode: false,
      },
    },
  },
};
export default config;
