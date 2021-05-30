import { version_, version_params__I } from './version_'
/**
 * version query param
 * @returns {string}
 */
export function version_query_str_(params?:version_params__I) {
	return `v=${encodeURIComponent(version_(params))}`
}
