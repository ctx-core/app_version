import { version_ } from './version_';
/**
 * version query param
 * @returns {string}
 */
export function version_query_str_(params) {
    return `v=${encodeURIComponent(version_(params))}`;
}
//# sourceMappingURL=src/version_query_str_.js.map