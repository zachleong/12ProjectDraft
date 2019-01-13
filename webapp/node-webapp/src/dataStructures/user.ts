class User {
    user_id: string;
    user_class: string;
    user_name: string;
    user_pass: string;

    constructor (user_class: string, user_id: string, user_name: string, user_pass: string) {
        this.user_class = user_class;
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_pass = user_pass;
    }

    getUserID() {
        return this.user_id;
    }

    getUserClass() {
        return this.user_class;
    }

    getUserName() {
        return this.user_name;
    }
    getUserPass() {
        return this.user_pass;
    }
}

export {User};