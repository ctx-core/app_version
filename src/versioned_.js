import { version_ } from './version_';
/**
 * versioned file
 * @param {*}ctx
 * @param {string} url
 * @returns {string}
 */
export function versioned_(url, params) {
    return `${url}?${version_(params)}`;
}
//# sourceMappingURL=src/versioned_.js.map