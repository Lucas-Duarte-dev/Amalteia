import 'dotenv/config';
import express from "express";
import {routes} from "@infra/http/routes";

const app = express();

app.use(express.json());

app.use(routes);

export { app };
