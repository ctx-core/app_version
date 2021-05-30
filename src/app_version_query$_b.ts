import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { app_version$_b } from './app_version$_b'
import type { app_version_Ctx } from './app_version_Ctx'
const key = 'app_version_query$'
export const app_version_query$_b = _b<app_version_Ctx, typeof key>(key, ctx=>
	derived$(
		app_version$_b(ctx),
		app_version=>
			`v=${encodeURIComponent(app_version as string|number)}`))
export type app_version_query_T = string
export interface app_version_query$_T extends Readable$<app_version_query_T> {}
export { app_version_query$_b as b__query__version__app }
