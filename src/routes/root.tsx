import config from '@/common/config';

import { NotFoundRoute, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const root = createRootRouteWithContext<{}>()({
  component: () => (
    <>
      <Outlet />
      {config.run !== 'production' && <TanStackRouterDevtools />}
    </>
  ),
  errorComponent: (error) => {
    return (
      <div>
        Loading Root Error
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  },
  pendingComponent: () => {
    return <span>Loading Root</span>;
  },
});

const NotFound = () => {
  return (
    <div className="p-2">
      <h3>404 - Not Found</h3>
    </div>
  );
};

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => root,
  component: NotFound,
});

export default root;
