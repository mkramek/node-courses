const readline = require("node:readline");
const fs = require("node:fs");
const { program } = require("commander");
require("colors");

program.option(
  "-f, --file [name]",
  "file for saving game results",
  "results.txt"
);

program.parse(process.argv);

const consoleManager = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10) + 1;

const isValid = (value) => {
  if (isNaN(value)) {
    console.log("Wprowadź liczbę!".red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log("Liczba powinna znajdować się w przedziale od 1 do 10".red);
    return false;
  }
  return true;
};

const log = (data) => {
  try {
    fs.appendFileSync(logFile, `${data}\n`);
    console.log(`Udało się zapisać rezultat w pliku ${logFile}`.green);
  } catch (err) {
    console.log(`Nie udało się zapisać pliku ${logFile}`.red);
  }
};

const game = () => {
  consoleManager.question(
    "Wprowadź liczbę od 1 do 10, aby zgadywać: ".blue,
    (value) => {
      value = Number.parseInt(value, 10);
      if (!isValid(value)) {
        game();
        return;
      }
      count += 1;
      if (value === mind) {
        console.log("Gratulacje. Odgadłeś liczbę za %d razem".green, count);
        log(
          `${new Date().toLocaleDateString()}: Gratulacje. Odgadłeś liczbę za ${count} razem`
        );
        consoleManager.close();
        return;
      }
      console.log("Nie zgadłeś. Kolejna próba.".red);
      game();
    }
  );
};

game();

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// reader.on("line", (input) => {
//   console.log(`Wypisano: [${input}]\n`);
// });

// reader.question("Jak masz na imię?\n > ", (answer) => {
//   reader.pause();
//   reader.write(`Miło Cię poznać, ${answer}!\n`);
//   reader.close();
// });
