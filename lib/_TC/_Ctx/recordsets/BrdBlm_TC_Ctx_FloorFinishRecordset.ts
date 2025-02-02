/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import { BrdBlm_eGlossRoughness } from "../../../enums/BrdBlm_eGlossRoughness.ts";
import { A3D,
    Uts } from "../deps.ts";
import { BrdBlm_TC_Ctx_eFloorColor } from "../enums/BrdBlm_TC_Ctx_eFloorColor.ts";
import { BrdBlm_TC_Ctx_eFloorFinish } from "../enums/BrdBlm_TC_Ctx_eFloorFinish.ts";
import { BrdBlm_TC_Ctx_TFloorFinishRecordset } from "../types/BrdBlm_TC_Ctx_TFloorFinishRecordset.ts";



export const BrdBlm_TC_Ctx_FloorFinishRecordset: BrdBlm_TC_Ctx_TFloorFinishRecordset =
{
    [BrdBlm_TC_Ctx_eFloorFinish.FLOOR_1]: {
        id: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_1,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eFloorColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_1 + A3D.ApgA3D_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_1 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eFloorFinish.FLOOR_2]: {
        id: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_2,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eFloorColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_2 + A3D.ApgA3D_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_2 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eFloorFinish.FLOOR_3]: {
        id: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_3,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eFloorColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_3 + A3D.ApgA3D_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_3 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eFloorFinish.FLOOR_4]: {
        id: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_4,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eFloorColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_4 + A3D.ApgA3D_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_4+ A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eFloorFinish.FLOOR_5]: {
        id: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_5,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eFloorColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_4 + A3D.ApgA3D_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_4 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eFloorFinish.FLOOR_6]: {
        id: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_6,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_eFloorColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_6 + A3D.ApgA3D_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_6 + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
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