import { version_, version_params__I } from './version_.js'
/**
 * versioned file
 * @param {*}ctx
 * @param {string} url
 * @returns {string}
 */
export function versioned_(url:string, params:version_params__I) {
	return `${url}?${version_(params)}`
}
