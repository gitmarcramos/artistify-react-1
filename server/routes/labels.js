/*------------------------------------------
// LABELS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();
const labelModel = require("../model/Label");
const uploader = require("../config/cloudinary");

//GET all labels from DB
router.get("/", async (req, res) => {
  try {
    const labels = await labelModel.find();
    res.status(200).json(labels);
  } catch (err) {
    console.error(err);
  }
});

//GET label from ID
router.get("/:id", async (req, res) => {
  try {
    const label = await labelModel.findById(req.params.id);
    res.status(200).json(label);
  } catch (error) {
    console.error(error);
  }
});

// DELETE label from ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedLabel = await labelModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedLabel);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
