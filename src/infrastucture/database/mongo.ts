import mongoose from 'mongoose';
import {environment} from '../../environment';

export class Mongo {
    async connect(): Promise<void> {
        await mongoose.connect(environment.mongo_uri || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    }
}
