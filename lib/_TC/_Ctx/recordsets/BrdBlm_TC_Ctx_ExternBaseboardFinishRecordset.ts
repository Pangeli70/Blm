/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import {
    Uts
} from "../../../deps.ts";
import {
    BrdBlm_eGlossRoughness
} from "../../../enums/BrdBlm_eGlossRoughness.ts";
import {
    BrdBlm_eTextureType
} from "../../../enums/BrdBlm_eTextureType.ts";
import {
    BrdBlm_IMaterialDef_Signature
} from "../../../interfaces/BrdBlm_IMaterialDef.ts";
import {
    BrdBlm_TC_Ctx_eExternBaseboardColor
} from "../enums/BrdBlm_TC_Ctx_eExternBaseboardColor.ts";
import {
    BrdBlm_TC_Ctx_eExternBaseboardFinish
} from "../enums/BrdBlm_TC_Ctx_eExternBaseboardFinish.ts";
import {
    BrdBlm_TC_Ctx_TExternBaseboardFinishRecordset
} from "../types/BrdBlm_TC_Ctx_TExternBaseboardFinishRecordset.ts";



export const BrdBlm_TC_Ctx_ExternBaseboardFinishRecordset: BrdBlm_TC_Ctx_TExternBaseboardFinishRecordset =
{
    [BrdBlm_TC_Ctx_eExternBaseboardFinish.BASEBOARD_1]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eExternBaseboardFinish.BASEBOARD_1,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eExternBaseboardColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eExternBaseboardFinish.BASEBOARD_1 + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
}


/*! ---------------------------------------------------------------------------
* @copyright Breda Sistemi industriali S.p.A., 2023-24 - http://bredasys.com
* All rights reserved
* @licence You cannot host, display, distribute or share this Work in any
* form, both physical and digital. You cannot use this Work in any commercial
* or non-commercial product, website or project. You cannot sell this Work
* and you cannot mint an NFTs out of it.
* ---------------------------------------------------------------------------
*/