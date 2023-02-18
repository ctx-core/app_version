import { version_ } from '../version_/index.js'
/**
 * versioned file
 * @param url{string}
 * @param url{import('../version_').version__params_T}
 * @returns {string}
 */
export function versioned_(url, params) {
	return `${url}?${version_(params)}`
}
