import {v4 as uuidV4} from "uuid";
import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

export class User {
    id?: string;

    name: string;

    email: string;

    password: string;

    password_confirmed: string;

    isAdmin?: boolean;

    created_at?: Date;

    updated_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.isAdmin = false;
            this.created_at = new Date();
            this.updated_at = new Date();
        }
    }
}