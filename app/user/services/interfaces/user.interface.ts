// If we only need type checking, the interface is sufficient and lighter weight.
interface UserInterface {
    id:         number;
    firstName:  string;
    lastName:   string;
    email:      string;
}