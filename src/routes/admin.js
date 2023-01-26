const express = require("express");
const AdminController = require("../controllers/AdminController");

const router = express.Router();

router.get("/servicos", AdminController.listService);

module.exports = router;
