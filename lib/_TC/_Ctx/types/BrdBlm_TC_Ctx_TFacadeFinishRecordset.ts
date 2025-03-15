/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import { A3D } from "../../../deps.ts";
import { BrdBlm_TC_Ctx_eFacadeFinish } from "../enums/BrdBlm_TC_Ctx_eFacadeFinish.ts";



/**
 * Struttura dati che contiene le definizioni delle finiture 
 * per la facciata del contesto delle chiusure tecniche
 */
export type BrdBlm_TC_Ctx_TFacadeFinishRecordset = Record<
    BrdBlm_TC_Ctx_eFacadeFinish,
    A3D.ApgA3D_IMaterialDef
>;

/*! ---------------------------------------------------------------------------
* @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
* All rights reserved
* @licence You cannot host, display, distribute or share this Work in any
* form, both physical and digital. You cannot use this Work in any commercial
* or non-commercial product, website or project. You cannot sell this Work
* and you cannot mint an NFTs out of it.
* ---------------------------------------------------------------------------
*/