import cors from "@fastify/cors";
import fastify from "fastify";

import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  origin: true, // all frontend URLs are allowed
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server is running on port 3333");
  });
