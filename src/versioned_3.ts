import { versioned_ } from './versioned_'
import type { version_params__I } from './version_'
/**
 * _versioned with ctx
 * @param {*}ctx
 * @returns {string}
 */
export function versioned_3(params:version_params__I) {
	return function versioned_2(url:string) {
		return versioned_(url, params)
	}
}