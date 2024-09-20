import { setUpServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    setUpServer();
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
