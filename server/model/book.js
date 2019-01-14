const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

module.exports = moongoose.model('Book',bookSchema);