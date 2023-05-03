import { IncomingMessage, ServerResponse } from "http";

import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import Cors from "micro-cors";

import { createContext } from "../../graphql/context";
import { schema } from "../../graphql/schema";

const cors = Cors();

const apolloServer = new ApolloServer({ context: createContext, schema });
const startServer = apolloServer.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: MicroRequest, res: ServerResponse<IncomingMessage>) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};

export default cors(handler);
