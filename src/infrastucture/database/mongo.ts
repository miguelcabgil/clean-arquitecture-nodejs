import mongoose from 'mongoose';
import {environment} from '../../environment';
import {UserSchema} from './schemas/user.schema';

export class Mongo {
    connect() {
        mongoose.connect(environment.mongo_uri || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
            .then(() => console.log('Connected to mongo'))
            .catch(reason => console.error(reason));
    }

    static users = UserSchema;
}
