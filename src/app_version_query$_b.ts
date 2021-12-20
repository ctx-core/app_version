import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { app_version$_b } from './app_version$_b.js'
const key = 'app_version_query$'
export const app_version_query$_b:B<app_version_query$_T> = be_(key, ctx=>
	computed$(
		app_version$_b(ctx),
		app_version=>
			`v=${encodeURIComponent(app_version as string|number)}`))
export type app_version_query$_T = ReadableAtom$<string>
export { app_version_query$_b as b__query__version__app }
