const fs = require("fs");

function getAllLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroById(id) {
  const livros = getAllLivros();
  return livros.find((livro) => livro.id === id);
}

function addLivro(novoLivro) {
  const livros = getAllLivros();
  const newListLivros = [...livros, novoLivro];
  fs.writeFileSync("livros.json", JSON.stringify(newListLivros));
}

function updatePartialLivro(id, livro) {
  let livros = getAllLivros();
  const index = livros.findIndex((livro) => livro.id === id);

  const livroUpdated = { ...livros[index], ...livro };
  livros[index] = livroUpdated;
  fs.writeFileSync("livros.json", JSON.stringify(livros));
}

function updateLivro(id, livro) {
  let livros = getAllLivros();
  const index = livros.findIndex((livro) => livro.id === id);

  livros[index] = livro;
  fs.writeFileSync("livros.json", JSON.stringify(livros));
}

function removeLivro(id) {
  const livros = getAllLivros();

  const livrosFiltered = livros.filter((livro) => livro.id !== id);
  fs.writeFileSync("livros.json", JSON.stringify(livrosFiltered));
}

module.exports = {
  getAllLivros,
  getLivroById,
  addLivro,
  updatePartialLivro,
  updateLivro,
  removeLivro,
};
