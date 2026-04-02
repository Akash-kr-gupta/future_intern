const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");
const auth = require("../middleware/auth");

// ADD LEAD (Public Route)
router.post("/add", async(req,res)=>{
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ message: "Lead Added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding lead", error: err.message });
  }
});

// GET ALL LEADS
router.get("/leads",auth,async(req,res)=>{
const data = await Lead.find().sort({createdAt:-1});
res.json(data);
});

// DELETE
router.delete("/delete/:id",auth,async(req,res)=>{
await Lead.findByIdAndDelete(req.params.id);
res.send("Deleted");
});

// UPDATE
router.put("/update/:id",auth,async(req,res)=>{
await Lead.findByIdAndUpdate(req.params.id,req.body);
res.send("Updated");
});

module.exports = router;