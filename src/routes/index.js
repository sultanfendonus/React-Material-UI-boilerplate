import { publicRoutes } from "./public";
import { homeRoutes } from "./home";
import { authRoutes } from "./auth";
import { adminRoutes } from "./admin";

const routes = [homeRoutes, publicRoutes, authRoutes, adminRoutes];

export default routes;
