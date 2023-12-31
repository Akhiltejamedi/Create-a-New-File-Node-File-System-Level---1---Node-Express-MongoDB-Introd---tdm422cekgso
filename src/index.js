const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try {
    // Use fs.promises.writeFile to write the content to the file
    await fs.writeFile(fileName, fileContent);
    console.log(`${fileName} created successfully!`);
  } catch (error) {
    console.error(`Error creating ${fileName}:`, error);
  }
};

module.exports = { writeFile };
(async () => await writeFile(fileName, fileContent))();