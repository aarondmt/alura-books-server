const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  try {
    res.send("Olá mundo!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", (req, res) => {
  res.send("Acessou POST");
});

router.put("/", (req, res) => {
  res.send("Acessou PUT");
});

router.patch("/", (req, res) => {
  res.send("Acessou PATCH");
});

router.delete("/", (req, res) => {
  res.send("Acessou DELETE");
});

module.exports = router;
