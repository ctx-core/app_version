import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { app_version$_b } from './app_version$_b.js'
import type { app_version_Ctx } from './app_version_Ctx.js'
const key = 'app_version_query$'
export const app_version_query$_b:B<app_version_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		app_version$_b(ctx),
		app_version=>
			`v=${encodeURIComponent(app_version as string|number)}`))
export type app_version_query$_T = Readable$<string>
export { app_version_query$_b as b__query__version__app }
