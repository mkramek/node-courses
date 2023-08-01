const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    type: "number",
    result: "Retrieved",
  });
});

router.get("/:id", (req, res) => {
  res.json({
    type: "number",
    result: "Retrieved",
    id: req.params.id,
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    type: "number",
    result: "Created",
    body: req.body,
  });
});

router.put("/:id", (req, res) => {
  res.json({
    type: "number",
    result: "Updated",
    data: req.body,
    id: req.params.id,
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    type: "number",
    result: "Deleted",
    id: req.params.id,
  });
});

module.exports = router;
