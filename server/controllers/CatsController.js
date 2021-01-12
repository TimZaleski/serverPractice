import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController";

export class CatsController extends BaseController {
  constructor() {
    // Route should always be plural and a collection name
    super("api/cats")
    this.router
      .get("", this.getAll)
      // adds the property 'id' to the request paramameter
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await catsService.getAll()
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      let data = await catsService.getOne(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await catsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await catsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      let data = await catsService.delete(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}