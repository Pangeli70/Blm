/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */


import {
    BrdBlm_eGlossRoughness
} from "../../../enums/BrdBlm_eGlossRoughness.ts";
import {
    BrdBlm_IMaterialDef_Signature
} from "../../../interfaces/BrdBlm_IMaterialDef.ts";
import {
    BrdBlm_TC_Ctx_eWallFinish
} from "../enums/BrdBlm_TC_Ctx_eWallFinish.ts";
import {
    BrdBlm_TC_Ctx_TWallFinishRecordset
} from "../types/BrdBlm_TC_Ctx_TWallFinishRecordset.ts";


export const BrdBlm_TC_Ctx_WallFinishRecordset: BrdBlm_TC_Ctx_TWallFinishRecordset =
{
    [BrdBlm_TC_Ctx_eWallFinish.SMOOTH_MORTAR]: {
        signature: BrdBlm_IMaterialDef_Signature,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_indoor_walls_FineMortar_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
            canRotate: true
        }
    },
}


/*! ---------------------------------------------------------------------------
* @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
* All rights reserved
* @licence You cannot host, display, distribute or share this Work in any
* form, both physical and digital. You cannot use this Work in any commercial
* or non-commercial product, website or project. You cannot sell this Work
* and you cannot mint an NFTs out of it.
* ---------------------------------------------------------------------------
*/