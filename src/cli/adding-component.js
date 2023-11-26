const path = require("path");
const fs = require("fs");

module.exports = (str) => {
  const configPath = path.join(process.cwd(), "roodiroot.json");
  if (!fs.existsSync(configPath)) {
    return console.log(
      '🚨Initialize the project with the command "npx my-pack init"🚨'
    );
  }
  const configFile = require(path.join(process.cwd(), "roodiroot.json"));
  if (!configFile.contentPath || configFile.contentPath === "") {
    return console.log(
      '🚨Set the path to superpack.json or initialize the project with the command "my-pack init"🚨'
    );
  }
  if (!fs.existsSync(configFile.contentPath)) {
    fs.mkdirSync(configFile.contentPath, { recursive: true });
    console.log("Missing folders created🏎");
  }

  const newElement = path.join(configFile.contentPath, "/", str + ".tsx");
  const copyElement = path.join(__dirname, "..", "components", str + ".tsx");
  if (!fs.existsSync(copyElement)) {
    return console.log(`Component named ${str} does not exist😱`);
  }
  fs.copyFile(copyElement, newElement, (error) => {
    if (error) {
      throw error;
    }
    console.log(`File "${str}.tsx" created successfully✅`);
  });
};
