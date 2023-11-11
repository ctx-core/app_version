import { version_ } from '../version_'
/**
 * version query param
 * @param params{import('./index.d.ts').version__params_T}
 * @returns {string}
 */
export function version_query_str_(
	params
) {
	return `v=${encodeURIComponent(version_(params))}`
}
