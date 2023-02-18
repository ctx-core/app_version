import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { app_version__ } from '../app_version__/index.js'
/** @type {typeof import('./index.d.ts').app_version_query__} */
export const app_version_query__ = be_('app_version_query_', ctx=>
	computed_(app_version__(ctx), app_version=>
		`v=${encodeURIComponent(app_version)}`))
export { app_version_query__ as app_version_query$_ }
