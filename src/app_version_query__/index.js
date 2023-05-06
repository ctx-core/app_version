import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { app_version__ } from '../app_version__/index.js'
export const [
	app_version_query__,
	app_version_query_,
] = be_computed_pair_('app_version_query_', ctx=>
	computed_(app_version__(ctx), app_version=>
		`v=${encodeURIComponent(app_version)}`))
export { app_version_query__ as app_version_query$_ }
