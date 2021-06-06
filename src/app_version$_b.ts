import { be_ } from '@ctx-core/object'
import { tup } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import { CACHE_VERSION$_b, VERSION$_b } from '@ctx-core/env'
import type { app_version_Ctx } from './app_version_Ctx'
const key = 'app_version$'
export const app_version$_b = be_<app_version_Ctx, typeof key>(key, ctx=>
	derived$(tup(
		CACHE_VERSION$_b(ctx),
		VERSION$_b(ctx),
		),
		([CACHE_VERSION, VERSION])=>
			CACHE_VERSION
			|| VERSION
			|| Math.random().toString()))
export type app_version_T = string
export interface app_version$_T extends Readable$<app_version_T> {}
export { app_version$_b as b__version__app }
