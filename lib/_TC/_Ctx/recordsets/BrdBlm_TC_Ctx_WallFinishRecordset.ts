/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import {
    Uts, A3D
} from "../deps.ts";
import {
    BrdBlm_eGlossRoughness
} from "../../../enums/BrdBlm_eGlossRoughness.ts";
import {
    BrdBlm_TC_Ctx_eWallColor
} from "../enums/BrdBlm_TC_Ctx_eWallColor.ts";
import {
    BrdBlm_TC_Ctx_eWallFinish
} from "../enums/BrdBlm_TC_Ctx_eWallFinish.ts";
import {
    BrdBlm_TC_Ctx_TWallFinishRecordset
} from "../types/BrdBlm_TC_Ctx_TWallFinishRecordset.ts";



export const BrdBlm_TC_Ctx_WallFinishRecordset: BrdBlm_TC_Ctx_TWallFinishRecordset =
{
    [BrdBlm_TC_Ctx_eWallFinish.CONTEXT_INDOOR_WALLS_FINE_MORTAR]: {
        id: BrdBlm_TC_Ctx_eWallFinish.CONTEXT_INDOOR_WALLS_FINE_MORTAR,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eWallColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eWallFinish.CONTEXT_INDOOR_WALLS_FINE_MORTAR + A3D.ApgA3D_eTextureType.BUMP,
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