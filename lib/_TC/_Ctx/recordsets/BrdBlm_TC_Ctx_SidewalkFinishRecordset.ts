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
    A3D,
    Uts
} from "../deps.ts";
import {
    BrdBlm_TC_Ctx_eSidewalkColor
} from "../enums/BrdBlm_TC_Ctx_eSidewalkColor.ts";
import {
    BrdBlm_TC_Ctx_eSidewalkFinish
} from "../enums/BrdBlm_TC_Ctx_eSidewalkFinish.ts";
import {
    BrdBlm_TC_Ctx_TSidewalkFinishRecordset
} from "../types/BrdBlm_TC_Ctx_TSidewalkFinishRecordset.ts";



export const BrdBlm_TC_Ctx_SidewalkFinishRecordset: BrdBlm_TC_Ctx_TSidewalkFinishRecordset =
{
    [BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_1]: {
        id: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_1,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eSidewalkColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_1 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_2]: {
        id: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_2,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eSidewalkColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_2 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_3]: {
        id: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_3,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eSidewalkColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_3 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_4]: {
        id: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_4,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eSidewalkColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_4 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_5]: {
        id: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_5,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eSidewalkColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_5 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_6]: {
        id: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_6,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eSidewalkColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eSidewalkFinish.SIDEWALK_6 + A3D.ApgA3D_eTextureType.BUMP,
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