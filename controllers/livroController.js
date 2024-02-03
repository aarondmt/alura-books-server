const fs = require("fs");
const {
  getAllLivros,
  getLivroById,
  addLivro,
  updatePartialLivro,
  removeLivro,
} = require("../services/livro.js");

const checkId = (id) => {
  return id && Number(id);
};

function getLivros(req, res) {
  try {
    const livros = getAllLivros();
    res.status(200).send(livros);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    if (checkId(id)) {
      const livro = getLivroById(id);
      res.status(200).send(livro);
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function postLivro(req, res) {
  try {
    if (req.body.nome) {
      addLivro(req.body);
      res.status(201).send("Livro inserido!");
    } else {
      res.status(422).send("O campo nome é obrigatório");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    if (checkId(id)) {
      updatePartialLivro(id, req.body);
      res.status(201).send("Livro atualizado!");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function putLivro(req, res) {
  try {
    const id = req.params.id;
    if (checkId(id)) {
      updatePartialLivro(id, req.body);
      res.status(201).send("Livro atualizado!");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    if (checkId(id)) {
      removeLivro(id);
      res.status(201).send("Livro removido!");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  putLivro,
  deleteLivro,
};
