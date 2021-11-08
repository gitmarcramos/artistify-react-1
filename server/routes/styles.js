/*------------------------------------------
// STYLES ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();
const styleModel = require("../model/Style");


//GET all the styles from database
router.get("/", async (req, res) => {
  try {
    const styles = await styleModel.find();
    res.status(200).json(styles);
  } catch (err) {
    consle.error(err);
  }
});


//GET style from ID
router.get("/:id", async (req, res)=>{
  try{
    const style = await styleModel.findById(req.params.id);
    res.status(200).json(style);
  }catch(err){
    console.error(err);
  }
})


//DELETE style from ID
router.delete("/:id", async (req, res)=>{
  try{
    const deletedStyle = await styleModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedStyle);
  }catch(error){
    console.log(error);
  }
})


module.exports = router;
