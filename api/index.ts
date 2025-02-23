import { Hono } from "hono";

interface Env {
  Bindings: {
    //@ts-ignore
    ASSETS: Fetcher;
  };
}

const app = new Hono<Env>();

app.get("/api", (c) => c.text("Hello Vite!"));

app.get("*", async (c) => {
  return await c.env.ASSETS.fetch(c.req.raw);
});

export default app;
