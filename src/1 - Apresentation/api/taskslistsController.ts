import express from 'express';

class TasklistsController {
  public async create(
    req: express.Request,
    res: express.Response,
  ): Promise<express.Response> {
    return res.json({ msg: 'chegou...' });
  }
}

export default new TasklistsController();
