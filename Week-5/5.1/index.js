const axios = require("axios");

const getRickandMortyCharacter = pageNumber => {
  return axios
    .get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
    .then(data => {
      return data.data.info;
    });
};

const asyncAwaitTask = async () => {
  let counter = 1;
  while (counter <= 3) {
    let characters = await getRickandMortyCharacter(counter);
    console.log("async await", characters);
    counter++;
  }
};

async function* generatorTask() {
  let count = 1;
  while (count < 4) {
    const response = await getRickandMortyCharacter(count);
    count++;
    yield response;
  }
}

const callGeneratorTask = () => {
  const task = generatorTask();
  let count = 0;

  while (count < 3) {
    task.next().then(({ value }) => {
      console.log("generator", value);
    });
    count++;
  }
};

callGeneratorTask();
asyncAwaitTask();
