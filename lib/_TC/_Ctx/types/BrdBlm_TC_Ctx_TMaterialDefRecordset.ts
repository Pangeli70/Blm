/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 DLV 20230626
 * @version 0.2 APG 20230707
 * @version 0.3 APG 20231109 Pulizia e refactoring
 * @version 0.4 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_IMaterialDef } from "../../../../../A3D/lib/interfaces/ApgA3D_IMaterialDef.ts";
import { BrdBlm_TC_Ctx_ePartName } from "../enums/BrdBlm_TC_Ctx_ePartName.ts";



/**
 * Struttura della tabella che contiene le definizioni dei
 * materiali per le mesh del contesto
 */
export type BrdBlm_TC_Ctx_TMaterialDefRecordset = Record<
    BrdBlm_TC_Ctx_ePartName,
    ApgA3D_IMaterialDef | null
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