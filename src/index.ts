import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import user from "./user/index";
import post from "./post";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(swagger({
    documentation: {
      info: {
        title: 'Elysia Documentation',
        version: '1.0.0',
        description: 'Api for a tutorial!'
      }
    }
  }))
  .use(user)
  .use(post)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
