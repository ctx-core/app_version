import { versioned_ } from '../versioned_'
/**
 * _versioned with ctx
 * @param params{import('../version_').version__params_T}
 * @returns {(url:string)=>string}
 */
export function versioned_3(
	params
) {
	return function versioned_2(url) {
		return versioned_(url, params)
	}
}
