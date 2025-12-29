const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  createNote,
  getNotes,
  getByTag,
  searchNotes,
} = require("../controllers/noteController");

router.post("/", auth, createNote);
router.get("/", auth, getNotes);
router.get("/tag/:tag", auth, getByTag);
router.get("/search", auth, searchNotes);

module.exports = router;
