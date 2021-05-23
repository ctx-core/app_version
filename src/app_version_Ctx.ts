import type { env_Ctx } from '@ctx-core/env'
import type { app_version_T } from './app_version_b'
import type { app_version_query_T } from './app_version_query_b'
export interface app_version_Ctx extends env_Ctx{
	app_version?:app_version_T
	app_version_query?:app_version_query_T
}
