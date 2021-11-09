/*------------------------------------------
// ALBUMS ROUTING
------------------------------------------*/

const { json } = require("express");
const express = require("express");
const router = new express.Router();
const albumModel = require("../model/Album");
const fileUploader = require("./../config/cloudinary");

// CREATE album
router.post("/", fileUploader.single("picture"), (req, res, next) => {
  // NEED cover, title, released date for the ALBUM informations
  // + NEED name for LABEL infos
  // + NEED name for ARTIST infos
  // + NEED name for STYLE infos

  // ALBUM collection
  const {cover, title, releaseDate } = req.body;

  // LABEL collection
  let {labelName} = req.body

  // ARTIST collection
  let {artistName} = req.body

  // STYLE collection
  let {styleName} = req.body


  //!CHANGE THIS
  if(!labelName){
    console.log("NEEEDS TO CHANGE THIS")
  }


});

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
    const deletedAlbum = await albumModel.findByIdAndDelete(req.params.id)
      .populate;
    res.status(200).json(deletedAlbum);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
