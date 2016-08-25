export class UserModel {

    constructor(
        public username:        string,
        public email:           string,
        public password:        string,
        public firstName:       string,
        public id?:             number,
        public lastName?:       string,
        public countryId?:      number,
        public stateId?:        number,
        public cityId?:         number,
        public languageId?:     number,
        public birthAt?:        string,
        public createdAt?:      string,
        public updatedAt?:      string,
        public deletedAt?:      string
    ) {}
}