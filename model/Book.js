const {
  Schema,
  model
} = require("mongoose");

const bookSchema = new Schema({
  _bookId: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, 'Why no name?'],
    lowercase: true
  },
  author: {
    type: String,
    lowercase: true
  },
  typeBook: {
    type: String,
    default: 'Новинка',
    enum: ['Новинка', 'Бестцеллер', 'Распрожажа', ]
  },
  price: {
    type: String,
    required: [true, 'Why no price?']
  },
  format: {
    type: String
  },
  image: String,
  description: String,
  updated: {
    type: Date,
    default: Date.now
  }
  // publisher: String,
  //genre: String,
});

module.exports = model("Book", bookSchema);