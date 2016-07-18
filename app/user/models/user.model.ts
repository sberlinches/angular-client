export class UserModel {

    constructor(
        public username:        string,
        public email:           string,
        public password:        string,
        public firstName:       string,
        public id?:             number,
        public lastName?:       string,
        public city_id?:        number,
        public state_id?:       number,
        public country_id?:     number,
        public language_id?:    number,
        public birthAt?:        string,
        public createdAt?:      string,
        public updatedAt?:      string,
        public deletedAt?:      string
    ) {}
}