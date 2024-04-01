import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { app_version_ } from '../app_version/index.js'
export const [
	app_version_query$_,
	app_version_query_,
] = id_be_memo_pair_(
	'app_version_query',
	ctx=>
		`v=${encodeURIComponent(app_version_(ctx))}`)
export { app_version_query$_ as app_version_query__ }
