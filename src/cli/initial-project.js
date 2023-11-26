const path = require("path");
const fs = require("fs");

module.exports = () => {
  const data = `{
    "contentPath": "src/components/ui"
}`;
  fs.writeFile(path.join(process.cwd(), "roodiroot.json"), data, (err) => {
    if (err) {
      throw err;
    }
    console.log("The project has been initialized 🦄");
  });
};
