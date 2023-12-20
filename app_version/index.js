import { CACHE_VERSION_, VERSION_ } from 'ctx-core/env'
import { be_memo_pair_ } from 'ctx-core/rmemo'
export const [
	app_version$_,
	app_version_,
] = be_memo_pair_(ctx=>
	CACHE_VERSION_(ctx)
	|| VERSION_(ctx)
	|| Math.random().toString(),
{ id: 'app_version' })
export { app_version$_ as app_version__ }
