const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve) => {
    let total = 0;
    promiseTheaterIXX()
    .then((array1) => {
      array1.forEach(data => {
        if(data.hasil === emosi)
          total += 1;
      });
      promiseTheaterVGC()
      .then((array2) => {
        array2.forEach(data => {
          if(data.hasil === emosi)
            total += 1;
        });

        return resolve(total);
      });
    });
  });
};

module.exports = {
  promiseOutput,
};
