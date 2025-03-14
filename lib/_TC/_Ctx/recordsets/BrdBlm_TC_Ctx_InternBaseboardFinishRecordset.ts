/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import { Uts,A3D } from "../deps.ts";
import { BrdBlm_eGlossRoughness } from "../../../enums/BrdBlm_eGlossRoughness.ts";
import { BrdBlm_TC_Ctx_eInternBaseboardColor } from "../enums/BrdBlm_TC_Ctx_eInternBaseboardColor.ts";
import { BrdBlm_TC_Ctx_eInternBaseboardFinish } from "../enums/BrdBlm_TC_Ctx_eInternBaseboardFinish.ts";
import { BrdBlm_TC_Ctx_TInternBaseboardFinishRecordset } from "../types/BrdBlm_TC_Ctx_TInternBaseboardFinishRecordset.ts";



export const BrdBlm_TC_Ctx_InternBaseboardFinishRecordset: BrdBlm_TC_Ctx_TInternBaseboardFinishRecordset =
{
    [BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_1]: {
        id: BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_1,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eInternBaseboardColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_1 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_2]: {
        id: BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_2,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eInternBaseboardColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_2 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_3]: {
        id: BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_3,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eInternBaseboardColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_3 + A3D.ApgA3D_eTextureType.BUMP,
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