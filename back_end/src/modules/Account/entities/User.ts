import {Entity} from "@core/domain/Entity";

class User extends Entity<ICreateUserDTO> {
    get name() {
        return this.props.name
    }

    get email() {
        return this.props.email
    }

    get password() {
        return this.props.password
    }

    private constructor(props: ICreateUserDTO, id?: string) {
        super(props, id);
    }


    static create(props: ICreateUserDTO, id?: string) {
        return new User(props, id);
    }

}

export {User};