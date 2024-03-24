/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_IMaterialDef
} from "../../../interfaces/BrdBlm_IMaterialDef.ts";
import {
    BrdBlm_TC_Ctx_eInternBaseboardFinish
} from "../enums/BrdBlm_TC_Ctx_eInternBaseboardFinish.ts";



/**
 * Struttura che contiene le definizioni delle finiture 
 * per gli zoccoli interni del contesto delle chisure tecniche
 */
export type BrdBlm_TC_Ctx_TInternBaseboardFinishRecordset = Record<
    BrdBlm_TC_Ctx_eInternBaseboardFinish,
    BrdBlm_IMaterialDef
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