import express from 'express';
// import jwt from 'jsonwebtoken';
import taskslistsRoute from './taskslistsRoute';
// import accountRoute from './account-route';
// import sshRoute from './ssh-credentials-route';
// import hostsRoute from './hosts-route';
// import kubeConfig from './kube-config-route';

const router = express.Router();

// router.use(accountRoute);

// router.use(
//   '/',
//   async (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction,
//   ) => {
//     try {
//       const token = req.headers.authorization;
//       await jwt.verify(token, process.env.SECRET_TOKEN);
//       next();
//     } catch (e) {
//       res.status(403);
//       res.json({ msg: 'Token não é valido!' });
//     }
//   },
// );

router.use(taskslistsRoute);
// router.use(sshRoute);
// router.use(hostsRoute);
// router.use(kubeConfig);

export default router;
