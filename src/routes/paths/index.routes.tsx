import rootRoute from '../root';
import { Route, Link, NotFoundRoute, Outlet, useNavigate } from '@tanstack/react-router';

import { Dash } from '@/components/general/template';
import Landing from '@/screens/account/home';
import Bridge from '@/screens/account/forms';

export const _rootRoute = new Route({
  getParentRoute: () => rootRoute,
  component: () => (
    <Dash>
      <Outlet />
    </Dash>
  ),
  id: 'layout',
});

export const indexRoute = new Route({
  path: `/`,
  component: Landing,
  loader: async () => {
    /*  await queryClient.ensureQueryData(getRandomBeerQueryOptions()); */
  },
  getParentRoute: () => _rootRoute,
  pendingComponent: () => {
    return <span>Loading Random Details</span>;
  },
  errorComponent: (error) => {
    return (
      <div>
        Loading Random Error
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  },
});

export const bridgeRoute = new Route({
  path: `bridge`,
  component: Bridge,
  loader: async () => {
    /*  await queryClient.ensureQueryData(getRandomBeerQueryOptions()); */
  },
  getParentRoute: () => _rootRoute,
  pendingComponent: () => {
    return <span>Loading Random Details</span>;
  },
  errorComponent: (error) => {
    return (
      <div>
        Loading Random Error
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  },
});
