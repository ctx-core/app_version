import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { app_version__ } from './app_version__.js'
export const app_version_query__:B<ReadableAtom_<string>> = be_('app_version_query_', ctx=>
	computed_(
		app_version__(ctx),
		app_version=>
			`v=${encodeURIComponent(app_version as string|number)}`))
export { app_version_query__ as app_version_query$_ }
