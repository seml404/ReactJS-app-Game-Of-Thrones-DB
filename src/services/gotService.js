export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }
  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`this is custom error text, status ${res.status}`);
    }
    const data = await res.json();
    console.log(`this is data from funcitoin:`);
    console.dir(data);
    return data;
  }

  async getAllCharacters() {
    const result = await this.getResourse(`/characters?page=5&pageSize=10`);
    return result.map(this._transformCharacter);
  }

  async getCharacter(id) {
    const result = await this.getResourse(`/characters/${id}`);
    return this._transformCharacter(result);
  }
  getAllHouses() {
    return this.getResourse(`/houses`);
  }
  getHouse(id) {
    return this.getResourse(`/houses/${id}`);
  }
  getAllBooks() {
    return this.getResourse(`/books`);
  }

  _transformCharacter(res) {
    for (let key in res) {
      if (!res[key]) {
        res[key] = "No info";
      }
    }
    return {
      name: res.name,
      gender: res.gender,
      born: res.born,
      died: res.died,
      culture: res.culture,
    };
  }
}

// const got = new GotService();

// got.getAllCharacters("/characters?page=5&pageSize=10`").then((res) => {
//   console.log(res.map((item) => item.name).join(" "));
// });

// got.getCharacter(100).then((res) => console.log(res));
