const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  // fetch data dari promise iix dan vgc
  const moviesIxx = await promiseTheaterIXX();
  const moviesVgc = await promiseTheaterVGC();

  // combine iix & vgc, filter berdasarkan emosi, lalu hitung jumlah member
  return moviesIxx
    .concat(moviesVgc)
    .filter((i) => i.hasil === emosi)
    .length;
};

module.exports = {
  promiseOutput,
};
