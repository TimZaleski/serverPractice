import BaseController from "../utils/BaseController";

export class ValuesController extends BaseController {
  constructor() {
    super("api/values");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(_, res, next) {
    try {
      console.log("here now")
      return res.send("<h1>Hello World</h1>");
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
