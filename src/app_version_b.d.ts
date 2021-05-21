import { Readable$ } from '@ctx-core/store';
import { CACHE_VERSION_ctx_I, VERSION_ctx_I } from '@ctx-core/env';
export interface app_version_Ctx extends CACHE_VERSION_ctx_I, VERSION_ctx_I {
    app_version?: app_version_T;
}
export declare const app_version_b: import("@ctx-core/object").Be<app_version_Ctx, "app_version">;
export declare type $app_version_T = string;
export interface app_version_T extends Readable$<$app_version_T> {
}
export { app_version_b as b__version__app };
