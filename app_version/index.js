import { CACHE_VERSION_, VERSION_ } from '@ctx-core/env'
import { be_computed_pair_ } from '@ctx-core/nanostores'
export const [
	app_version$_,
	app_version_,
] = be_computed_pair_(ctx=>
	CACHE_VERSION_(ctx)
	|| VERSION_(ctx)
	|| Math.random().toString())
	.config({ id: 'app_version' })
export { app_version$_ as app_version__ }
