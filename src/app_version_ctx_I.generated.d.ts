import type { app_version_Ctx } from './app_version_Ctx';
import type { app_version$_T } from './app_version$_b';
import type { app_version_query$_T } from './app_version_query$_b';
export interface app_version_ctx_I {
    app_version$?: app_version$_T;
    app_version_query$?: app_version_query$_T;
    app_version_b_h?: app_version_b_h_T;
}
export interface app_version_b_h_T {
    get app_version$(): app_version$_T;
    get app_version_query$(): app_version_query$_T;
}
export declare function app_version_b_h_b(ctx: app_version_Ctx): app_version_b_h_T;
