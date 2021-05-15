import type { _version_params_I } from './_version';
/**
 *
 * @param {*}ctx
 * @param script_src
 * @param params
 * @returns {string}
 */
export declare function _js_versioned(script_src: string, params?: _js_versioned_params_I): string;
export interface _js_versioned_params_I extends _version_params_I {
    debug?: boolean;
    minify?: boolean;
}
export { _js_versioned as _versioned__js };
