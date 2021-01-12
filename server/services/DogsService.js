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


class DogsService {

  getAll() {
    return fakeDb.dogs
  }
  getOne(id) {
    let dog = fakeDb.dogs.find(k => k.id === id)
    if (!dog) {
      throw new Error("Invalid Id")
    }
    return dog
  }
  create(newDog) {
    newDog.id = generateId()
    fakeDb.create("dogs", newDog)
    return newDog
  }
  edit(update) {
    let dog = this.getOne(update.id)


    // dont stress here this will be done in the DB
    for (let key in update) {
      dog[key] = update[key]
    }
    return dog
  }

  delete(id) {
    let dog = this.getOne(id)
    fakeDb.dogs = fakeDb.dogs.filter(k => k.id != id)
    return { result: "Deleted Successfully" }
  }

}

export const dogsService = new DogsService();