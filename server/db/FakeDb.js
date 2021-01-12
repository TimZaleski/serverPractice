class FakeDB {
  create(collection, body) {
    this[collection].push(body)
  }
  knights = []
  burgers = []
  cats = []
  dogs = []
}

export const fakeDb = new FakeDB()