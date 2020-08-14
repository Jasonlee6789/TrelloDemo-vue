import { Controller, Get, Params } from "koa-ts-controllers";

@Controller("/test")
class TestController {
  @Get("/hello")
  async hello() {
    return "Hello Test!";
  }

  @Get("/user/:id")
  async getUser(@Params() p: { id: number }) {
    return "当前params中的用户id是： " + p.id;
  }
}
