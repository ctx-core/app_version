import { Readable$ } from '@ctx-core/store';
import { app_version_Ctx } from './app_version_b';
export interface app_version_query_Ctx extends app_version_Ctx {
    app_version_query?: app_version_query_T;
}
export declare const app_version_query_b: import("@ctx-core/object").Be<app_version_query_Ctx, "app_version_query", app_version_query_T>;
export declare type $app_version_query_T = string;
export interface app_version_query_T extends Readable$<$app_version_query_T> {
}
export { app_version_query_b as b__query__version__app };
