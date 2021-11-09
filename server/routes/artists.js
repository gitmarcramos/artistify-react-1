/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();

const artistModel = require("../model/Artist");
 const styleModel = require("../model/Style");

//CREATE the artists
router.post("/", async (req, res, next) => {
  try {
    // get const variables from the req.body
    const { name, description, isBand, styleName, color, wikiURL } = req.body;
    // get the variable style from the select input (req.body)
    let {style}  = req.body;

    // Check if there is values to create a new style or use existing values from the select input 
    if (!styleName && !wikiURL) {
      const newStyle = await styleModel.create({
        styleName,
        wikiURL,
        color,
      });
      //turn the new ID created in the DB into string
      style = newStyle._id.toString();
    }

    //create the new artist with values from the inputs
    const newArtist = await artistModel.create({name, description, isBand, style});

    res.status(200).json(newArtist);
  } catch (err) {
    console.error(err);
  }
});

//READ (GET) all the artists from Database
router.get("/", async (req, res) => {
  try {
    const artist = await artistModel.find().populate("style");
    res.status(200).json(artist);
  } catch (err) {
    console.error(err);
  }
});

//READ (GET) artist by ID from database
router.get("/:id", async (req, res) => {
  try {
    const foundArtist = await artistModel
      .findById(req.params.id)
      .populate("style");
    res.status(200).json(foundArtist);
  } catch (err) {
    console.log(err);
  }
});

//UPDATE
router.patch("/:id", async (req, res, next) => {
  try {
    const foundArtistandUpdate = await artistModel
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate("style");
    res.status(200).json(foundArtistandUpdate);
  } catch (err) {
    console.log(error);
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
