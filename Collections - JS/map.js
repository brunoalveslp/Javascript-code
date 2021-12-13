const getAdmins = map =>{
    let admins = []

    for([key, value] of map){
        if(value === 'ADMIN'){
            admins.push(key);
        }
    }

    return admins;
}

const users = new Map();

users.set('Bruno','ADMIN');
users.set('Stephany','USER');
users.set('Alex','ADMIN');
users.set('John','ADMIN');


console.log(getAdmins(users));