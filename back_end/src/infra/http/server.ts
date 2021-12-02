import "reflect-metadata";
import 'dotenv/config';
import express, {Request, Response, NextFunction} from "express";
import {DomainException} from "@infra/http/error/DomainException";
import createConnection from "@infra/typeorm";
import {routes} from "@infra/http/routes";

createConnection();

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof DomainException) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});

export { app };
