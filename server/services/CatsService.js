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


class CatsService {

  getAll() {
    return fakeDb.cats
  }
  getOne(id) {
    let cat = fakeDb.cats.find(k => k.id === id)
    if (!cat) {
      throw new Error("Invalid Id")
    }
    return cat
  }
  create(newCat) {
    newCat.id = generateId()
    fakeDb.create("cats", newCat)
    return newCat
  }
  edit(update) {
    let cat = this.getOne(update.id)


    // dont stress here this will be done in the DB
    for (let key in update) {
      cat[key] = update[key]
    }
    return cat
  }

  delete(id) {
    let cat = this.getOne(id)
    fakeDb.cats = fakeDb.cats.filter(k => k.id != id)
    return { result: "Deleted Successfully" }
  }

}

export const catsService = new CatsService();