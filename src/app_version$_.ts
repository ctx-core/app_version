import { CACHE_VERSION$_, VERSION$_ } from '@ctx-core/env'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'app_version$'
export const app_version$_:B<app_version$_T> = be_(key, ctx=>
	computed$([
		CACHE_VERSION$_(ctx),
		VERSION$_(ctx),
		],
		(CACHE_VERSION, VERSION)=>
			CACHE_VERSION
			|| VERSION
			|| Math.random().toString()) as app_version$_T
)
export type app_version$_T = ReadableAtom$<string>
