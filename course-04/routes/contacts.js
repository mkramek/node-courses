const express = require("express");
const router = express.Router();

// @ GET /api/contacts
router.get("/contacts", function (req, res, next) {
  res.json({
    method: "GET",
    endpoint: "/contacts",
  });
});

// @ GET /api/contacts/:id
router.get("/contacts/:id", function (req, res, next) {
  res.json({
    method: "GET",
    endpoint: `/contacts/${req.params.id}`,
  });
});

// @ POST /api/contacts
router.post("/contacts", function (req, res, next) {
  res.json({
    method: "POST",
    endpoint: "/contacts",
  });
});

// @ DELETE /api/contacts/:id
router.delete("/contacts/:id", function (req, res, next) {
  res.json({
    method: "DELETE",
    endpoint: `/contacts/${req.params.id}`,
  });
});

// @ PUT /api/contacts/:id
router.put("/contacts/:id", function (req, res, next) {
  res.json({
    method: "PUT",
    endpoint: `/contacts/${req.params.id}`,
  });
});

module.exports = router;
