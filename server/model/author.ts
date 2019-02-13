import moongoose from 'mongoose';
const Schema = moongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number
});

export default moongoose.model('Author', authorSchema);
