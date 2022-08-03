import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defautlOption = await getConnectionOptions();
  return createConnection(Object.assign(defautlOption));
};
