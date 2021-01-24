import { UserService } from './../../src/user/user.service';
import { users } from '../../src/user/user.entity';
const userServiceMock = (function(){})
export default () => {
    return {
        user():users{
            const user = new users()
            user.id=1
            user.name= 'string';
            user.surename = 'string'
            user.birthday = 'string'
            user.password = 'string'
            user.created_at ='string'
            user.updated_at ='string'
            return user;
        },
        userService() {return userServiceMock }

    }
}