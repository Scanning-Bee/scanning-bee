/* ----------------------------------- */
/* ------------ IPC Queries ---------- */
/* ----------------------------------- */

import { AnnotationYaml } from 'miscTypes';

/**
 ** Queries sent by the renderer process to the main process.
 */
export enum RENDERER_QUERIES {
    SELECT_FOLDER = 'SELECT_FOLDER',
    SAVE_ANNOTATIONS = 'SAVE_ANNOTATIONS',
}

/**
 ** Queries sent by the main process to the renderer process.
 */
export enum MAIN_QUERIES {
}

/* ----------------------------------- */
/* ----------- IPC Payloads ---------- */
/* ----------------------------------- */

export type RENDERER_QUERY_PAYLOADS = {
    [RENDERER_QUERIES.SELECT_FOLDER]: undefined,
    [RENDERER_QUERIES.SAVE_ANNOTATIONS]: { targetFolder: string; annotations: AnnotationYaml[] },
};

export type MAIN_QUERY_PAYLOADS = {
};
