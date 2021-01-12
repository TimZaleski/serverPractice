import { knightsService } from "../services/KnightsService";
import BaseController from "../utils/BaseController";

export class KnightsController extends BaseController {
  constructor() {
    // Route should always be plural and a collection name
    super("api/knights")
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
      let data = await knightsService.getAll()
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      let data = await knightsService.getOne(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await knightsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await knightsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      let data = await knightsService.delete(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}