const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModels');

//@desc Get all contact
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
//@desc Create New contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log('The request body is :', req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields are mandatory !');
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });

  res.status(201).json(contact);
});
//@desc Get  contact
//@route GET /api/contacts/id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Get contact ${req.params.id}` });
});
//@desc Update contact
//@route PUT /api/contacts/id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Update contact ${req.params.id}` });
});
//@desc Delete contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `delete contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
