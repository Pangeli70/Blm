/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import { BrdBlm_TC_Ctx_Component } from "../classes/BrdBlm_TC_Ctx_Component.ts";
import { BrdBlm_TC_Ctx_ePartName } from "../enums/BrdBlm_TC_Ctx_ePartName.ts";



/**
 * Struttura che contiene i componenti del contesto
 */
export type BrdBlm_TC_Ctx_TComponentRecordset = Record<
    BrdBlm_TC_Ctx_ePartName,
    BrdBlm_TC_Ctx_Component | BrdBlm_TC_Ctx_Component[] | null
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