import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { CACHE_VERSION_b, VERSION_b } from '@ctx-core/env'
export const app_version_b = _b('app_version', ctx=>
	derived([
			CACHE_VERSION_b(ctx),
			VERSION_b(ctx),
		],
		([$CACHE_VERSION, $VERSION])=>
			$CACHE_VERSION
			|| $VERSION
			|| Math.random()))
export { app_version_b as b__version__app }
