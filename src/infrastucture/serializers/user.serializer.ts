import {User} from '../../core/models/user';

export class UserSerializer {
    public serialize(user: any): User {
        return new User({
            name: user.name,
            email: user.email
        });
    }

    public deserialize(user: User): { all: () => { name: string; email: string }; name: () => { name: string } } {
        const all = () => ({
            ...user
        });
        const name = () => ({
            name: user.name
        });
        return {all, name};
    }
}
