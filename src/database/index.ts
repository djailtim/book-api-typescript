/** Usar os dados abaixo para banco de dados postgres, também copiar os dados
 * do arquivo ormconfig_postgres para o ormconfig.json alterando conforme os
 * dados do banco criado */

/**
import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = "localhost"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return await createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      database: process.env.NODE_ENV === "test"
        ? "fin_api_test"
        : defaultOptions.database
    })
  )
}
*/

/** Conexão para arquivo sqlite, caso for usar postgres comente o código abaixo
 * e descomente o código acima fazendo a configuração do ormconfig.json */

import { createConnection } from 'typeorm';
createConnection();
