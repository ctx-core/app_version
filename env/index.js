import { import_meta_env_ } from 'ctx-core/env'
export const RELEASE_VERSION =
	import_meta_env_().RELEASE_VERSION
	|| import_meta_env_().RELEASE_VERSION
export const SOURCE_VERSION = import_meta_env_().SOURCE_VERSION
export const CACHE_VERSION =
	import_meta_env_().CACHE_VERSION
	|| (RELEASE_VERSION && RELEASE_VERSION.replace('v', ''))
	|| SOURCE_VERSION
	|| Math.random().toString()
