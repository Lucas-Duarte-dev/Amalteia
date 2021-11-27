import {Entity} from "@core/domain/Entity";

interface IUserProps  {
    name: string,
    email: string,
    password: string
}

export class User extends Entity<IUserProps> {

    get name() {
        return this.props.name;
    }

    get email() {
        return this.props.email;
    }

    get password() {
        return this.props.password;
    }

    private constructor(props: IUserProps, id?: string) {
        super(props, id);
    }
}