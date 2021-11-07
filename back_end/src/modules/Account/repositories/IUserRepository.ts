import {IUserDTO} from '../dto/IUserDTO';

interface IUserRepository {
    create(data: IUserDTO): Promise<void>
}

export {IUserRepository};