import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { app_version$_ } from '../app_version/index.js'
export const [
	app_version_query$_,
	app_version_query_,
] = be_computed_pair_('app_version_query_', ctx=>
	computed_(app_version$_(ctx), app_version=>
		`v=${encodeURIComponent(app_version)}`))
export { app_version_query$_ as app_version_query__ }
