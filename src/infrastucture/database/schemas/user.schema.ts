import mongoose, {Schema} from 'mongoose';
import {IUser} from '../../../core/interfaces/models/i.user';

const schema = new Schema({
    name: String,
    email: String
});

export const UserSchema = mongoose.model<IUser>('users', schema);

