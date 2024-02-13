const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'please input the contact name'],
  },
});
