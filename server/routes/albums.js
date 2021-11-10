/*------------------------------------------
// ALBUMS ROUTING
------------------------------------------*/

const { json } = require("express");
const express = require("express");
const router = new express.Router();
const albumModel = require("../model/Album");
const artistModel = require("../model/Artist");
const labelModel = require("../model/Label");
const styleModel = require("../model/Style");
const fileUploader = require("./../config/cloudinary");

// CREATE album
router.post("/", fileUploader.single("picture"), async (req, res, next) => {
  try {
    // NEED cover, title, releaseDate for the ALBUM informations
    // + NEED logo, name, street, country, city for LABEL infos
    // + NEED name, description, isBand for ARTIST infos
    // + NEED name, color, wikiURL for STYLE infos

    // ALBUM collection
    const { cover, title, releaseDate } = req.body;

    // LABEL collection
    const { labelLogo, labelName, labelStreet, labelCountry, labelCity } =
      req.body;

    // ARTIST collection
    const { artistName, artistDescription, artistIsBand } = req.body;

    // STYLE collection
    const { styleName, styleColor, styleWikiURL } = req.body;

    let { label } = req.body;
    let { artist } = req.body;
    let { style } = req.body;

    // if label is not created ---- BONUS -----
    if (!labelName) {
      const newLabel = await labelModel.create({
        labelLogo,
        labelName,
        labelStreet,
        labelCountry,
        labelCity,
      });
      label = newLabel._id.toString();
    }

    // if artist is not created ---- BONUS -----
    if (!artistName) {
      const newArtist = await artistModel.create({
        artistName,
        artistDescription,
        artistIsBand,
      });
      artist = newArtist._id.toString();
    }

    // if style is not created ---- BONUS -----
    if (!styleName) {
      const newStyle = await styleModel.create({
        styleName,
        styleColor,
        styleWikiURL,
      });
      style = newStyle._id.toString();
    }

    //! This is the "only" road that should really work!
    const newAlbum = await albumModel.create({
      title,
      releaseDate,
      picture,
      style,
      label,
      artist,
    });
    res.status(200).json(newAlbum);
  } catch (err) {
    console.log(err);
  }
});

//READ (GET) albums from database
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

// READ (GET) album from ID
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

// UPDATE (PATCH) album from ID
router.patch("/:id", fileUploader.single("picture"), async (req, res) => {
  try {
    const foundAlbumUpdate = await albumModel
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
  } catch (err) {
    console.log(err);
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
