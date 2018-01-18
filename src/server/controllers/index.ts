import * as express from 'express';

import authenticationController from './authentication/authenticationController';
import billsController from './bills/billsController';

const router: express.Router = express.Router();

authenticationController(router);
billsController(router);

export default router;
