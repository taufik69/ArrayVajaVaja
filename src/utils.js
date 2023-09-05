const { log } = require("console");
const fs = require("fs");

module.exports.saveFiles = (data, filePath) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    log(error.message);
    throw new Error("WriteFileSync file problem", error);
  }
};

module.exports.readFiles = (filePath) => {
  try {
    let data = fs.readFileSync(filePath, "utf-8");
    return data && JSON.parse(data);
  } catch (error) {
    log(error.message);
    throw new Error("From readfile Utils class", error);
  }
};
