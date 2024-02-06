const express = require("express");
const routeLivro = require("./routes/livro.js");
const cors = require("cors");

const app = express();

const port = 8000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/livros", routeLivro);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
