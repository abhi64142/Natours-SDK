// getApiData()
//   .then((res) => {
//     console.log("tours data-------------------------------", res.data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const module1Imports = require("./modules/module1");

module.exports = {
  getAllTours: module1Imports.getAllTours,
};
