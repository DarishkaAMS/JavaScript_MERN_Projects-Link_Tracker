import { Schema, model, Types } from 'mongoose';

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    links: [{ type: Types.ObjectId, ref: 'Link' }]
});

var User = model('User', userSchema);

export default User;