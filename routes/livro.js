const { Router } = require("express");
const {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  putLivro,
  deleteLivro,
} = require("../controllers/livroController.js");

const router = Router();

router.get("/", getLivros);

router.get("/:id", getLivro);

router.post("/", postLivro);

router.put("/:id", putLivro);

router.patch("/:id", patchLivro);

router.delete("/:id", deleteLivro);

module.exports = router;
