import authRouter from "./auth";
import userRouter from "./user";

const initRoutes = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
};
export default initRoutes;
