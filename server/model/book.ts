import moongoose from 'mongoose';
const Schema = moongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

export default moongoose.model('Book',bookSchema);
