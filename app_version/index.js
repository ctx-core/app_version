import { CACHE_VERSION_, VERSION_ } from 'ctx-core/env'
import { id_be_memo_pair_ } from 'ctx-core/rmemo'
export const [
	app_version$_,
	app_version_,
] = id_be_memo_pair_(
	'app_version',
	ctx=>
		CACHE_VERSION_(ctx)
		|| VERSION_(ctx)
		|| Math.random().toString())
export { app_version$_ as app_version__ }
