const express = require("express");
const router = express.Router();
const submissionController = require("./submissionsControllers.js");

// GET /submissions
router.get("/", submissionController.getAllSubmissions);

// POST /submissions/create
router.post("/create", submissionController.createSubmission);

module.exports = router;
