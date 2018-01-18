import * as express from 'express';

import routes from './controllers/index';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.configureRoutes();
  }

  private configureRoutes(): void {
    this.express.use('/api', routes);
  }
}

export default new App().express;
