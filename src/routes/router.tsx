import { Router, RouterProvider } from '@tanstack/react-router';
import { useState } from 'react';

import routeTree from './trees';
import { notFoundRoute } from './root';

import { QueryClient } from '@tanstack/react-query';

/* interface Props {
  client: QueryClient;
}
 */
const getRouter = (/* props: Props */) => {
  return new Router({
    routeTree,
    notFoundRoute,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    context: {
      /*     api: props.client, */
      /*       trpc: props.client, */
    },
  });
};

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}

/* export const router = getRouter(props); */

export const AppRouter = (/* props: Props */) => {
  const [router] = useState(() => getRouter(/* props */));

  return <RouterProvider router={router} />;
};
