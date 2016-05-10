export class UserModel {

    constructor(
        public id:          number,
        public firstName:   string,
        public lastName:    string,
        public email:       string,
        public country?:    string,
        public birthday?:   string
    ) {}
}