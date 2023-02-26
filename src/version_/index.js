import { import_meta_env_ } from '@ctx-core/env'
export function version_(params) {
	return (
		(params && (params.CACHE_VERSION || params.VERSION))
		|| import_meta_env_().CACHE_VERSION
		|| import_meta_env_().VERSION
		|| Math.random().toString()
	)
}
