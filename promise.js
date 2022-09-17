const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise( async (resolve) => {
      try {
        const ixx = await promiseTheaterIXX();
        const vgc = await promiseTheaterVGC();
        let emosiIXX = {};
        let emosiVGC = {};
        ixx.forEach((emote) => {
          emosiIXX[emote.hasil] = (emosiIXX[emote.hasil] || 0) + 1;
        });
        vgc.forEach((emote) => {
          emosiVGC[emote.hasil] = (emosiVGC[emote.hasil] || 0) + 1;
        });
        let { marah:marahIXX, 'tidak marah':tidakMarahIXX } = emosiIXX;
        let { marah:marahVGC, 'tidak marah':tidakMarahVGC} = emosiVGC;
        if (emosi == 'marah') {
          const hasil = marahIXX + marahVGC;
          resolve(hasil);
        } else {
          const hasil = tidakMarahIXX + tidakMarahVGC;
          resolve(hasil);
        }
      } catch (err) {
        throw(err);
      }
  });
};
module.exports = {
  promiseOutput,
};
