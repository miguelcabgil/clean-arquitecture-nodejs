export class User {
    name: string;
    email: string;

    constructor(props: { name: string, email: string }) {
        this.name = props.name;
        this.email = props.email;
    }
}
