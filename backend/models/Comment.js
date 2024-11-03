const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    maxLength: 100
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', commentSchema);