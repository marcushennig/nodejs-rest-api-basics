import {User} from "./app/user";

let promise = new Promise<number>(
    (resolve, reject) => {
        // the resolve / reject functions control the fate of the promise
        resolve(123)
        //reject(new Error('something bad happened'))
    }
);
promise.then(p => {
    console.log(`I got ${p}`);
    return 456;
    })
    .then(p => {
        console.log(`I got ${p}`);
        let user: User  = {
            id: 1,
            name: "Marcus",
            profession: "Senior Consultant",
            password: "1233"
        };
        return Promise.resolve<User>(user);
    })
    .then(p => console.log(p.name))
    .then(p => console.log(p))
    .catch(error => console.log(error));
