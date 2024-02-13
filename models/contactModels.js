const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'please input the contact name'],
    },
    email: {
      type: String,
      require: [true, 'please input the email address'],
    },
    phone: {
      type: String,
      require: [true, 'please input the phone number'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
