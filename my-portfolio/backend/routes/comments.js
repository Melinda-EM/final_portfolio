const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Project = require('../models/Project');

router.get('/projects', async (req, res) => {
  try {
    const sort = { createdAt: -1 };
    
    const projects = await Project.find()
      .sort(sort)
      .select('title description image githubLink websiteLink createdAt');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ 
      message: "Erreur lors de la récupération des projets",
      error: error.message 
    });
  }
});

router.get('/projects/:projectId/comments', async (req, res) => {
  try {
    const projectExists = await Project.findById(req.params.projectId);
    if (!projectExists) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }

    const comments = await Comment.find({ projectId: req.params.projectId })
      .sort({ createdAt: -1 });
    
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/projects/:projectId/comments', async (req, res) => {
  try {
    const projectExists = await Project.findById(req.params.projectId);
    if (!projectExists) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }

    const comment = new Comment({
      projectId: req.params.projectId,
      author: req.body.author,
      content: req.body.content
    });

    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/projects/:projectId/comments/:commentId', async (req, res) => {
  try {
    const comment = await Comment.findOne({
      _id: req.params.commentId,
      projectId: req.params.projectId
    });

    if (!comment) {
      return res.status(404).json({ message: "Commentaire non trouvé pour ce projet" });
    }

    await comment.deleteOne();
    res.json({ message: "Commentaire supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;