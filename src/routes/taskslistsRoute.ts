import express from 'express';
import taskslistsController from '../1 - Apresentation/api/taskslistsController';

const router = express.Router();

router.post(
  '/taskList/',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    try {
      await taskslistsController.create(req, res);
    } catch (e) {
      next(e);
    }
  },
);

// router.get(
//   '/cluster/:accountId',
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     try {
//       await clusterController.Read(req, res);
//     } catch (e) {
//       next(e);
//     }
//   },
// );

// router.put(
//   '/cluster/:clusterId',
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     try {
//       await clusterController.Update(req, res);
//     } catch (e) {
//       next(e);
//     }
//   },
// );

// router.delete(
//   '/cluster/:clusterId',
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     try {
//       await clusterController.Delete(req, res);
//     } catch (e) {
//       next(e);
//     }
//   },
// );

export default router;
