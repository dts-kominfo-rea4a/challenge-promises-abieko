const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => { 
  let hasilemosi = 0;
  try {
    let data1 = await promiseTheaterIXX();
    let data2 = await promiseTheaterVGC();
    data1.map((item) => { (item.hasil === emosi) ? hasilemosi += 1 : 0 });
    data2.map((item) => { (item.hasil === emosi) ? hasilemosi += 1 : 0 });
    return hasilemosi;
  } catch (error) {
    return error;
  }
};

module.exports = {
  promiseOutput,
};
