const listNames = require("../country/state/city/index");
// console.log(listNames);
const getFirstNames = require("../utilities/utils/index");
// console.log(getFirstNames);

const getPeopleInCity = (listNames) => {
  return getFirstNames(listNames);
};
// console.log(getPeopleInCity(listNames));

module.exports = getPeopleInCity;
