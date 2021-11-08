/*------------------------------------------
// ALBUMS ROUTING
------------------------------------------*/

const { json } = require("express");
const express = require("express");
const router = new express.Router();
const albumModel = require("../model/Album");
const uploader = require("./../config/cloudinary");

//GET albums from database
router.get("/", async (req, res) => {
  try {
    const albums = await albumModel
      .find()
      .populate("label")
      .populate({ path: "artist", populate: { path: "style" } });
    res.status(200).json(albums);
  } catch (err) {
    console.error(err);
  }
});

//GET album from ID
router.get("/:id", async (req, res) => {
  try {
    const album = await albumModel
      .findById(req.params.id)
      .populate("label")
      .populate({ path: "artist", populate: { path: "style" } });
    res.status(200).json(album);
  } catch (err) {
    console.error(err);
  }
});

//DELETE album from ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedAlbum = await albumModel.findByIdAndDelete(req.params.id).populate
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
