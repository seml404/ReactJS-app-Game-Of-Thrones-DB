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
    console.log(`this is data from functioning:`);
    console.dir(data);
    return data;
  };

  getAllCharacters = async () => {
    const result = await this.getResourse(
      `/characters?page=${Math.floor(Math.random() * 100)}&pageSize=10`
    );
    return result.map(this._transformInfo);
  };

  getCharacter = async (id) => {
    const result = await this.getResourse(`/characters/${id}`);
    return this._transformInfo(result);
  };
  getAllHouses = async () => {
    // return this.getResourse(`/houses`);
    const result = await this.getResourse(
      `/houses?page=${Math.floor(Math.random() * 20)}&pageSize=10`
    );
    return result.map(this._transformInfo);
  };
  getHouse = async (id) => {
    // return this.getResourse(`/houses/${id}`);
    const result = await this.getResourse(`/houses/${id}`);
    console.log(result);
    return this._transformInfo(result);
  };
  getAllBooks = async () => {
    const result = await this.getResourse(`/books?page=1&pageSize=12`);
    console.log(result);
    return result.map(this._transformInfo);
    // return this.getResourse(`/books`);
  };
  getBook = async (id) => {
    const result = await this.getResourse(`/books/${id}`);
    console.log(result);
    return this._transformInfo(result);
  };

  _transformInfo = (res) => {
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
