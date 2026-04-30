import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import HomePage from "./pages/home/HomePage";
import PageLayout from "./pages/layout/PageLayout";
import ExplorePage from "./pages/explore/ExplorePage";
import DiscoverPage from "./pages/discover/DiscoverPage";

const rootRoute = createRootRoute({
  component: () => (
    <PageLayout>
      <Outlet />
    </PageLayout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

const exploreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/explore",
  component: ExplorePage,
});

const discoverRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/discover",
  component: DiscoverPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  exploreRoute,
  discoverRoute,
]);

const router = createRouter({ routeTree });

export default router;
