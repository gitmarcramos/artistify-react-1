/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();

const artistModel = require("../model/Artist");
const albumModel = require("../model/Album");

//GET all the artists from Database
router.get("/", async (req, res) => {
  try {
    const artist = await artistModel.find().populate("style");
    res.status(200).json(artist);
  } catch (err) {
    console.error(err);
  }
});

//GET artist by ID from database
router.get("/:id", async (req, res) => {
  try {
    const foundArtist = await artistModel
      .findById(req.params.id)
      .populate("style");
    res.status(200).json(foundArtist);
  } catch (err) {
    console.err(err);
  }
});

//DELETE artist from database
router.delete("/:id", async (req, res) => {
  try {
    const deletedArtist = await artistModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedArtist);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
