import { CACHE_VERSION_, VERSION_ } from '@ctx-core/env'
import { val__be_computed_pair_ } from '@ctx-core/nanostores'
export const [
	app_version$_,
	app_version_,
] = val__be_computed_pair_('app_version', ctx=>
	CACHE_VERSION_(ctx)
	|| VERSION_(ctx)
	|| Math.random().toString())
export { app_version$_ as app_version__ }
