import { CACHE_VERSION__, VERSION__ } from '@ctx-core/env'
import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const app_version__:B<ReadableAtom_<string>> = be_('app_version_', ctx=>
	computed_([
			CACHE_VERSION__(ctx),
			VERSION__(ctx),
		],
		(CACHE_VERSION, VERSION)=>
			CACHE_VERSION
			|| VERSION
			|| Math.random().toString()) as ReadableAtom_<string>
)
export { app_version__ as app_version$_ }
