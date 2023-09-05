const { log } = require("console");
const fs = require("fs");

module.exports.saveFiles = (data, fileName) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data));
  } catch (error) {
    log(error.message);
    throw new Error(error);
  }
};

module.exports.readFiles = (fileName) => {
  try {
    let data = fs.writeFileSync(fileName, "utf-8");
    return data && JSON.parse(data);
  } catch (error) {
    log(error.message);
    throw new Error(error);
  }
};
