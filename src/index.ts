import * as http from 'http';
import { app } from './app';
import serverConf from './config/server';

async function bootstrap() {
  return app.listen(serverConf.server.port);
}

bootstrap()
  .then((server) =>
    console.log(`🚀 Server listening on port ${serverConf.server.port}!`),
  )
  .catch(err => {
    setImmediate(() => {
      console.error('Unable to run the server because of the following error:');
      console.error(err);
      process.exit();
    });
  });
