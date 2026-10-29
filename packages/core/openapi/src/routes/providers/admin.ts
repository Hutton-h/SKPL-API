import type { Core } from '@skpl/types';

import { createDebugger } from '../../utils';
import { AbstractRoutesProvider } from './abstract';

const debug = createDebugger('routes:provider:admin');

export class AdminRoutesProvider extends AbstractRoutesProvider {
  public get routes(): Core.Route[] {
    const { admin } = this._strapi;

    const routes = Object.values(admin.routes).flatMap((router) => router.routes);

    debug('found %o routes in SKPL admin', routes.length);

    return routes;
  }
}
