import { fakeDb } from "../db/FakeDb";

// NOTE THIS IS TEMPORARY
function generateId() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};


class BurgersService {

  getAll() {
    return fakeDb.burgers
  }
  getOne(id) {
    let burger = fakeDb.burgers.find(k => k.id === id)
    if (!burger) {
      throw new Error("Invalid Id")
    }
    return burger
  }
  create(newBurger) {
    newBurger.id = generateId()
    fakeDb.create("burgers", newBurger)
    return newBurger
  }
  edit(update) {
    let burger = this.getOne(update.id)


    // dont stress here this will be done in the DB
    for (let key in update) {
      burger[key] = update[key]
    }
    return burger
  }

  delete(id) {
    let burger = this.getOne(id)
    fakeDb.burgers = fakeDb.burgers.filter(k => k.id != id)
    return { result: "Deleted Successfully" }
  }

}

export const burgersService = new BurgersService();