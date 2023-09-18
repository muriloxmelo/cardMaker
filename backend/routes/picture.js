const express = require("express");
const router = express.Router();
const upload = require("../config/multer");

const PictureController = require("../controllers/PictureController");

// esse "file" é o name={} no input no front.
router.post("/", upload.single("file"), PictureController.create);

router.get("/", PictureController.findAll);

router.delete("/:id", PictureController.deletePhoto);

module.exports = router;
