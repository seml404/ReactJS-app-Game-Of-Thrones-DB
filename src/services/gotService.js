export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }
  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`this is custom error text, status ${res.status}`);
    }
    const data = await res.json();
    console.log(`this is data from funcitoin:`);
    console.dir(data);
    return data;
  };

  getAllCharacters = async () => {
    const result = await this.getResourse(
      `/characters?page=${Math.floor(Math.random() * 100)}&pageSize=10`
    );
    return result.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const result = await this.getResourse(`/characters/${id}`);
    return this._transformCharacter(result);
  };
  getAllHouses = async () => {
    return this.getResourse(`/houses`);
  };
  getHouse = async (id) => {
    return this.getResourse(`/houses/${id}`);
  };
  getAllBooks = async () => {
    return this.getResourse(`/books`);
  };

  _transformCharacter = (res) => {
    for (let key in res) {
      if (!res[key]) {
        res[key] = "No info";
      }
    }
    res.url = res.url.replace(/\D/g, "");
    return {
      url: res.url,
      name: res.name,
      gender: res.gender,
      born: res.born,
      died: res.died,
      culture: res.culture,
    };
  };
}

// const got = new GotService();

// got.getAllCharacters("/characters?page=5&pageSize=10`").then((res) => {
//   console.log(res.map((item) => item.name).join(" "));
// });

// got.getCharacter(100).then((res) => console.log(res));
