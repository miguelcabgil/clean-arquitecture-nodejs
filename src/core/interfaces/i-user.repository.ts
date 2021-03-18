import {User} from '../models/user';

export interface IUserRepository {
    create(user: User): User;
}
