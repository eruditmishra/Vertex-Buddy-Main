const express = require("express");
const router = express.Router();
const { createContact, getContacts } = require("../controllers/Contact");

// Create new contact message
router.post("/create-contact", createContact);

// Get all contacts
router.get("/all-contacts", getContacts);

module.exports = router;
