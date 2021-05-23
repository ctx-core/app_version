import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { app_version_b } from './app_version_b'
import type { app_version_Ctx } from './app_version_Ctx'
const key = 'app_version_query'
export const app_version_query_b = _b<app_version_Ctx, typeof key>(key, ctx=>
	derived$(
		app_version_b(ctx),
		app_version=>
			`v=${encodeURIComponent(app_version as string|number)}`))
export type $app_version_query_T = string
export interface app_version_query_T extends Readable$<$app_version_query_T> {}
export { app_version_query_b as b__query__version__app }
