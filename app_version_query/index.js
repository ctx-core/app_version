import { be_computed_pair_ } from '@ctx-core/nanostores'
import { app_version$_ } from '../app_version/index.js'
export const [
	app_version_query$_,
	app_version_query_,
] = be_computed_pair_(
	ctx=>app_version$_(ctx),
	app_version=>`v=${encodeURIComponent(app_version)}`,
	{ id: 'app_version_query' })
export { app_version_query$_ as app_version_query__ }
