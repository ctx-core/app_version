import { CACHE_VERSION$_, VERSION$_ } from '@ctx-core/env'
import { be_computed_pair_ } from '@ctx-core/nanostores'
export const [
	app_version$_,
	app_version_,
] = be_computed_pair_(ctx=>[CACHE_VERSION$_(ctx), VERSION$_(ctx)],
	(CACHE_VERSION, VERSION)=>
		CACHE_VERSION
	|| VERSION
	|| Math.random().toString(),
	{ id: 'app_version' })
export { app_version$_ as app_version__ }
