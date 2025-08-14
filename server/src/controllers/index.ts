import Elysia from "elysia";

import { HealthController } from "./health.controller";
import { UserController } from "./user.controller";

export const ApiControllers = new Elysia()
    .group('/api', (app) => app
        .use(HealthController)
        .use(UserController)
    );