const express = require("express");
const {
  addTransection,
  getAllTrnsetion,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//add transections POST Method
router.post("/add-transection", addTransection);

//edit transections POST Method
router.post("/edit-transection", editTransection);

//Delete transections POST Method
router.post("/delete-transection", deleteTransection);

//get transections
router.post("/get-transection", getAllTrnsetion);

module.exports = router;
