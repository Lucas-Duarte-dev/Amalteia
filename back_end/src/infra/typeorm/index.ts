import {createConnection, getConnectionOptions, Connection} from "typeorm";

export default async(host = "postgressql.amalteia.docker"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions("development" );
    return createConnection({ ...defaultOptions, name: "development" } as any);
}