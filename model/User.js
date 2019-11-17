const {
    Schema,
    model
} = require('mongoose')

const userSchema = new Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
    },
    typeBook: {
        type: String,
        default: 'Новинка',
        enum: ['Новинка', 'Бестцеллер', 'Распрожажа']
    },
    price: {
        type: Number,
        required: true,
        min: 5,
        max: 150
    },
    genre: String,
    format: {
        type: String
    },
    publisher: String,
    image: String,
    description: {
        type: String,
        default: 'Описание к данной книге отсутствует.'
    }
})

module.exports = model('Book', bookSchema);