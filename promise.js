const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (sikap) => {

  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const allTheater = [...theaterIXX, ...theaterVGC]

  let countSikap = 0;

  allTheater.forEach((film) => {
    if (film.hasil === sikap) {
      countSikap++;
    }
  })

  return countSikap;

};

module.exports = {
  promiseOutput,
};
