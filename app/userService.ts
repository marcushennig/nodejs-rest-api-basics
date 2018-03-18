import fs = require('fs')
import {User} from './user';

class UserService {


    public test():any {
        fs.readFile(
            './resources/users.json',
            'utf8',
            (error, data) => {
                return data;
            });
    }

    public getAllUsers() {

    }

    /**
     * Get the current user logged in to the application
     * @returns {User}
     */
    public getCurrentUser():User {

        let user: User  = {
            id: 1,
            name: "Marcus",
            profession: "Senior Consultant",
            password: "1233"
        };
        user.id  = 23;
        return user;
    }
}

export {UserService};