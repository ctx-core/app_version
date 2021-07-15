import type { env_Ctx } from '@ctx-core/env'
import type { app_version$_T } from './app_version$_b.js'
import type { app_version_query$_T } from './app_version_query$_b.js'
import type { app_version_ctx_I } from './app_version_ctx_I.generated'
export interface app_version_Ctx extends app_version_ctx_I, env_Ctx {
	app_version?:app_version$_T
	app_version_query$?:app_version_query$_T
}
