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


class KnightsService {

  getAll() {
    return fakeDb.knights
  }
  getOne(id) {
    let knight = fakeDb.knights.find(k => k.id === id)
    if (!knight) {
      throw new Error("Invalid Id")
    }
    return knight
  }
  create(newKnight) {
    newKnight.id = generateId()
    fakeDb.create("knights", newKnight)
    return newKnight
  }
  edit(update) {
    let knight = this.getOne(update.id)


    // dont stress here this will be done in the DB
    for (let key in update) {
      knight[key] = update[key]
    }
    return knight
  }

  delete(id) {
    let knight = this.getOne(id)
    fakeDb.knights = fakeDb.knights.filter(k => k.id != id)
    return { result: "Deleted Successfully" }
  }

}

export const knightsService = new KnightsService();