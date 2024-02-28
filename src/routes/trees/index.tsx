import rootRoute from '../root';

import * as IndexRoutes from '../paths/index.routes';

const RootRoutes = IndexRoutes._rootRoute.addChildren([
  IndexRoutes.indexRoute,
  IndexRoutes.bridgeRoute,
]);

export default rootRoute.addChildren([RootRoutes]);
