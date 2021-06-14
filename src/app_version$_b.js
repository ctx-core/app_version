import { be_ } from '@ctx-core/object';
import { tup } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { CACHE_VERSION$_b, VERSION$_b } from '@ctx-core/env';
const key = 'app_version$';
export const app_version$_b = be_(key, ctx => derived$(tup(CACHE_VERSION$_b(ctx), VERSION$_b(ctx)), ([CACHE_VERSION, VERSION]) => CACHE_VERSION
    || VERSION
    || Math.random().toString()));
export { app_version$_b as b__version__app };
//# sourceMappingURL=src/app_version$_b.js.map