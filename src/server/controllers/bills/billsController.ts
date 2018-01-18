import * as express from 'express';

export default (router: express.Router): void => {
  router.get('/bills', (req: express.Request, res: express.Response) => {
    res.status(200).send({
      controller: 'bills',
      type: 'get'
    });
  });
};
