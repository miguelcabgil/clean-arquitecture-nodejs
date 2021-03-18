import {IUserRepository} from '../../core/interfaces/i-user.repository';
import {User} from '../../core/models/user';

export class UserRepository implements IUserRepository {
    public create(user: User): User {
        console.log('create user');
        return user;
    }
}
