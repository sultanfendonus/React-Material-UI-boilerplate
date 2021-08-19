import { publicRoutes } from "./public";
import { homeRoutes } from "./home";
import { authRoutes } from "./auth";

const routes = [homeRoutes, publicRoutes, authRoutes];

export default routes;
