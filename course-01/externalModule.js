const { format } = require("date-fns");

// Moduł odpowiedzialny za wyświetlanie tekstu w konsoli
module.exports = {
  print: (...args) => {
    const date = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    // const normalDate = new Date();
    // const year = normalDate.getFullYear();
    // const month = (normalDate.getMonth() + 1).toString().padStart(2, "0");
    // const day = normalDate.getDate().toString().padStart(2, "0");
    // const hour = normalDate.getHours().toString().padStart(2, "0");
    // const min = normalDate.getMinutes().toString().padStart(2, "0");
    // const sec = normalDate.getSeconds().toString().padStart(2, "0");
    // const parsedDate = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    console.log(`[${[date]}]`, ...args);
  },
};
