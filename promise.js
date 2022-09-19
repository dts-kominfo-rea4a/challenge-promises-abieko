const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const dataTeaterIXX = await promiseTheaterIXX();
    const dataTeaterVGC = await promiseTheaterVGC();
    const dataVGC = dataTeaterVGC.filter((res) => res.hasil === emosi);
    const dataIXX = dataTeaterIXX.filter((res) => res.hasil === emosi);
    return dataVGC.length + dataIXX.length;
  } catch (error) {}
};

module.exports = {
  promiseOutput,
};
