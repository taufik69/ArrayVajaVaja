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
    fs.writeFileSync(fileName, "utf-8");
  } catch (error) {
    log(error.message);
    throw new Error(error);
  }
};
