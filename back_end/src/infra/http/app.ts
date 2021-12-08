import dotenv from 'dotenv';
import {app} from "@infra/http/server";

dotenv.config()
app.listen(process.env.PORT || 3333);