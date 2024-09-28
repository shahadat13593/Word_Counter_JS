const fileSelector = document.querySelector(".file-selector");
const fileContent = [];
fileSelector.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const content = e.target.result;
      const lines = content.split("\n");
      for (const line of lines) {
        if (line !== "") {
          fileContent.push(line.trim());
        }
      }
      console.log(fileContent);
      const fileLine = fileContent.length;
      let fileWords = 0;
      let count = 0;
      for (let i = 0; i < fileContent.length; i++) {
        fileWords += fileContent[i].split(" ").length;
        for (const char of [...fileContent[i].split("")]) {
          if (char !== " ") {
            count++;
          }
        }
      }
      const characters = count;
      document.querySelector(
        ".result"
      ).textContent = `In this file, There are ${fileWords} words, ${characters} characters and ${fileLine} ${
        fileLine > 1 ? "lines" : "line"
      }!`;
    };
    fileReader.readAsText(file);
  }
});
