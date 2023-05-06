import { CACHE_VERSION__, VERSION__ } from '@ctx-core/env'
import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
export const [
	app_version__,
	app_version_,
] = be_computed_pair_('app_version_', ctx=>
	computed_([
			CACHE_VERSION__(ctx),
			VERSION__(ctx),
		],
		(CACHE_VERSION, VERSION)=>
			CACHE_VERSION
			|| VERSION
			|| Math.random().toString()))
export { app_version__ as app_version$_ }
