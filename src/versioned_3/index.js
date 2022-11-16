import { versioned_ } from '../versioned_/index.js'
/**
 * _versioned with ctx
 * @param {*}ctx
 * @returns {(url:string)=>string}
 */
export function versioned_3(params) {
	return function versioned_2(url) {
		return versioned_(url, params)
	}
}
