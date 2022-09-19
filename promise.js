const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = (parameter) => {
//   return new Promise(async (resolve, reject) => {

//     //menampung data array
//     const ixx = await promiseTheaterIXX();
//     const vgc = await promiseTheaterVGC();
//     var marah = 0;
//     var tidak_marah = 0;

//     //hitung yang amrah di ixx
//     ixx.forEach((value, index) => {
//       if (value.hasil == 'marah') {
//         marah = marah + 1;
//       } else {
//         tidak_marah = tidak_marah + 1;
//       }
//     });

//     // hitung yang marah/tidak marah di vgc
//     vgc.forEach((value, index) => {
//       if (value.hasil == 'marah') {
//         marah = marah + 1;
//       } else {
//         tidak_marah = tidak_marah + 1;
//       }
//     });
//     // Kondisi gagal
//     if (parameter === null) {
//       reject('Maaf, katanya Error !');
//     }
//     // Kondisi terpenuhi
//     else {
//       if (parameter == 'marah') {
//         resolve(marah);
//       } else {
//         resolve(tidak_marah);
//       }
//     }
//   });
// };

const promiseOutput = async(parameter)=>{
    //menampung data array
    const ixx = await promiseTheaterIXX();
    const vgc = await promiseTheaterVGC();
    var marah = 0;
    var tidak_marah = 0;

    //hitung yang amrah di ixx
    ixx.forEach((value, index) => {
      if (value.hasil == 'marah') {
        marah = marah + 1;
      } else {
        tidak_marah = tidak_marah + 1;
      }
    }
    );
    // hitung yang marah/tidak marah di vgc
    vgc.forEach((value, index) => {
      if (value.hasil == 'marah') {
        marah = marah + 1;
      } else {
        tidak_marah = tidak_marah + 1;
      }
    });
    // Kondisi gagal
    if (parameter === null) {
      reject('Maaf, katanya Error !');
    }
    // Kondisi terpenuhi
    else {
      if (parameter == 'marah') {
        return marah;
      } else {
        return tidak_marah;
      }
    };
};

module.exports = {
  promiseOutput,
};
