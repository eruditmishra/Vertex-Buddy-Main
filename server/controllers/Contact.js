const Contact = require("../models/Contact");

// @desc   Create new contact message
// @route  POST /api/contact
// @access Public
exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new Contact({
      name,
      email,
      message,
    });

    const createdContact = await contact.save();

    res.status(201).json({
      success: true,
      message: "Contact message sent successfully",
      data: createdContact,
    });
  } catch (error) {
    console.log("Error dring contact creation: ", error.message);
    res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// @desc   Get all contact messages
// @route  GET /api/contact
// @access Public
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.log("Error getting contacts: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};
