import * as express from 'express';

export default (router: express.Router): void => {
  router.get(
    '/authentication',
    (req: express.Request, res: express.Response) => {
      res.status(200).send({
        controller: 'authentication',
        type: 'get'
      });
    }
  );
};
