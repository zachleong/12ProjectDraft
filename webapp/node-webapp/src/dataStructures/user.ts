class User {
    user_id: string;
    user_class: string;

    constructor (user_class: string, user_id: string) {
        this.user_class = user_class;
        this.user_id = user_id;
    }

    getUserID() {
        return this.user_id;
    }

    getUserClass() {
        return this.user_class;
    }
}

export {User};