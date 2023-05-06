import { import_meta_env_ } from '@ctx-core/env'
/** @typedef {import('./index.d.ts').version__params_T}version__params_T */
/**
 * @param {version__params_T}params
 * @returns {string}
 * @private
 */
export function version_(params) {
	return (
		(params && (params.CACHE_VERSION || params.VERSION))
		|| import_meta_env_().CACHE_VERSION
		|| import_meta_env_().VERSION
		|| Math.random().toString())
}
