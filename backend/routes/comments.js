const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const Comment = require("../models/Comments");

// CREATE POST
router.post('/create',async(req,res)=>{
    try {
        const newComment=new Post(req.body)
        const saveComment=await newComment.save()
        res.status(200).json(saveComment)
    } catch (error) {
        res.status(200).json(error)
    }
})
// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json(error);
  }
});
// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("Comment has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});
  // GET POST COMMENTS
router.get("/post/:postId", async (req, res) => {
    try {
      const comments = await Comment.find({postId:req.params.postId});
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json(error);
    }
  });
module.exports = router;
