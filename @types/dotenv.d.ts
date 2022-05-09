declare namespace NodeJS {
  interface ProcessEnv {
    DB_DIALECT: 'mariadb' | 'mysql' | 'postgres';
    DB_NAME: string;
    DB_USER: string;
    DB_PW: string;
    DB_HOST: string;
    DB_PORT: number;

    NUM_OF_IDS_PER_REQUEST: number;

    SERVER_PORT: number;
  }
}