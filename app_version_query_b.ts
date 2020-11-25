import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { app_version_b } from './app_version_b'
export const app_version_query_b = _b('app_version_query', ctx=>
	derived(
		app_version_b(ctx),
		app_version=>
			`v=${encodeURIComponent(app_version as string|number)}`))
export { app_version_query_b as b__query__version__app }
