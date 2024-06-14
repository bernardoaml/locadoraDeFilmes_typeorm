import { Router } from "express";
import { movieControllers } from "../controllers";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";

export const movieRouter: Router = Router()

movieRouter.post("", middlewares.validateBody(movieCreateSchema), movieControllers.create)
movieRouter.get("", middlewares.pagination, movieControllers.read)

movieRouter.use("/:movieId", middlewares.verifyIdExists)

movieRouter.get("/:movieId", movieControllers.retrieve)
movieRouter.patch("/:movieId", middlewares.validateBody(movieUpdateSchema), movieControllers.partialUpdate)
movieRouter.delete("/:movieId", movieControllers.destroy)