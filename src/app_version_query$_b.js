import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { app_version$_b } from './app_version$_b';
const key = 'app_version_query$';
export const app_version_query$_b = be_(key, ctx => derived$(app_version$_b(ctx), app_version => `v=${encodeURIComponent(app_version)}`));
export { app_version_query$_b as b__query__version__app };
//# sourceMappingURL=src/app_version_query$_b.js.map