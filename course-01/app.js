// 1. Import modułu odpowiedzialnego za obsługę plików
const fs = require("node:fs");
const promiseFs = require("node:fs").promises;
const path = require("node:path");
const { print } = require("./externalModule");

// 2. Wykorzystanie wbudowanej funkcji do odczytu plików
// Wariant 1: Async + callback
fs.readdir(__dirname, (error, files) => {
  if (error) {
    // 3. Obsługa błędów
    print("Wystąpił błąd: ", error.message);
  } else {
    // 4. Przetworzenie wyniku
    print("(async + callback) Lista plików: ", files);
  }
});

// Wariant 2: sync
try {
  const list = fs.readdirSync(__dirname);
  print("(sync) Lista plików: ", list);
} catch (error) {
  print("Wystąpił błąd: ", error);
}

// Wariant 3: Async + Promise
promiseFs
  .readdir(__dirname)
  .then((list) => {
    print("(async + promise) Lista plików: ", list);
  })
  .catch((error) => {
    print("Wystąpił błąd: ", error);
  });

// Zmienna globalna - dostępna na obszarze CAŁEJ aplikacji
global.sampleNumber = 10;

// Nazwa pliku - __filename
print("Nazwa pliku: ", __filename);

// Katalog pliku - __dirname
print("Katalog skryptu: ", __dirname);

print("Wykonana komenda: ", process.argv);

print("Obecny katalog: ", process.cwd());
process.chdir("../");
print("Obecny katalog: ", process.cwd());

setImmediate(() => {
  print("setImmediate uruchomiony!");
});

process.nextTick(() => {
  print("nextTick uruchomiony");
});

promiseFs
  .readdir(__dirname)
  .then((files) => {
    return Promise.all(
      files.map(async (filename) => {
        const stats = await promiseFs.stat(path.join(__dirname, filename));
        console.log(stats);
        return {
          "Nazwa pliku": filename,
          "Rozmiar pliku": stats.size,
          "Data modyfikacji": stats.mtime,
        };
      })
    );
  })
  .then((result) => console.table(result));
