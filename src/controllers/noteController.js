const Note = require("../models/noteModel");

exports.createNote = async (req, res) => {
  const note = await Note.create({
    ...req.body,
    user: req.user.id,
  });
  res.json(note);
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
};

exports.getByTag = async (req, res) => {
  const notes = await Note.find({
    user: req.user.id,
    tags: req.params.tag,
  });
  res.json(notes);
};

exports.searchNotes = async (req, res) => {
  const q = req.query.q;
  const notes = await Note.find({
    user: req.user.id,
    $or: [
      { title: { $regex: q, $options: "i" } },
      { content: { $regex: q, $options: "i" } },
    ],
  });
  res.json(notes);
};
