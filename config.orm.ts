import { NODE_ENV, MONGO_URL, MONGO_PORT, MONGO_DB } from './src/env';

const orm = {
  development: {
    url: MONGO_URL!,
  },
  testing: {
    url: MONGO_URL!,
  },
  staging: {
    host: 'localhost',
    port: MONGO_PORT!,
    username: 'admin_ob',
    password: 'pcH3jXvbCR9T0zbF',
    database: MONGO_DB!,
  },
  production: {
    url: MONGO_URL!,
  },
};

export default orm[NODE_ENV!];