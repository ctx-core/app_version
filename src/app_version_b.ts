import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { CACHE_VERSION_b, CACHE_VERSION_ctx_I, VERSION_b, VERSION_ctx_I } from '@ctx-core/env'
const key = 'app_version'
export interface app_version_Ctx
	extends CACHE_VERSION_ctx_I, VERSION_ctx_I {
	app_version?:app_version_T
}
export const app_version_b = _b<app_version_Ctx, typeof key>(key, ctx=>
	derived$([
			CACHE_VERSION_b(ctx),
			VERSION_b(ctx),
		],
		([$CACHE_VERSION, $VERSION])=>
			$CACHE_VERSION
			|| $VERSION
			|| Math.random().toString()))
export type $app_version_T = string
export interface app_version_T extends Readable$<$app_version_T> {}
export { app_version_b as b__version__app }
