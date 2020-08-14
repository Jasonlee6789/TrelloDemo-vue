import configs from "./configs";
import Koa from "koa";
import { bootstrapControllers } from "koa-ts-controllers";
import KoaRouter from "koa-router";
import path from "path";

(async () => {
  const app = new Koa();

  const router = new KoaRouter();
  await bootstrapControllers(app, {
    router: router,
    basePath: "/api",
    versions: [1],
    controllers: [path.resolve(__dirname, "controllers/**/*.ts")],
  });

  app.use(router.routes());

  app.listen(configs.server.port, configs.server.host, () => {
    console.log(
      `服务访问启动成功： http://${configs.server.host}:${configs.server.port}`
    );
  });
})();
