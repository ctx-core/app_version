import { CACHE_VERSION$_b, VERSION$_b } from '@ctx-core/env'
import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
const key = 'app_version$'
export const app_version$_b:B<app_version$_T> = be_(key, ctx=>
	computed$([
		CACHE_VERSION$_b(ctx),
		VERSION$_b(ctx),
		],
		(CACHE_VERSION, VERSION)=>
			CACHE_VERSION
			|| VERSION
			|| Math.random().toString()) as app_version$_T
)
export type app_version$_T = ReadableAtom$<string>
export { app_version$_b as b__version__app }
