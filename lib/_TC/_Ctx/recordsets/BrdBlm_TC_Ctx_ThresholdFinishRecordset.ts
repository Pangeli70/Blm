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
    BrdBlm_TC_Ctx_eThresholdColor
} from "../enums/BrdBlm_TC_Ctx_eThresholdColor.ts";
import {
    BrdBlm_TC_Ctx_eThresholdFinish
} from "../enums/BrdBlm_TC_Ctx_eThresholdFinish.ts";
import {
    BrdBlm_TC_Ctx_TThresholdFinishRecordset
} from "../types/BrdBlm_TC_Ctx_TThresholdFinishRecordset.ts";



export const BrdBlm_TC_Ctx_ThresholdFinishRecordset: BrdBlm_TC_Ctx_TThresholdFinishRecordset =
{
    [BrdBlm_TC_Ctx_eThresholdFinish.THRE_1]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eThresholdFinish.THRE_1,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eThresholdColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_1 + BrdBlm_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_1 + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eThresholdFinish.THRE_2]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eThresholdFinish.THRE_2,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eThresholdColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_2 + BrdBlm_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_2 + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eThresholdFinish.THRE_3]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eThresholdFinish.THRE_3,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eThresholdColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_3 + BrdBlm_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_3 + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eThresholdFinish.THRE_4]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eThresholdFinish.THRE_4,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eThresholdColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_4 + BrdBlm_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap   : true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_4 + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eThresholdFinish.THRE_5]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eThresholdFinish.THRE_5,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eThresholdColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_5 + BrdBlm_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_5 + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_eThresholdFinish.THRE_6]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eThresholdFinish.THRE_6,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eThresholdColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        albedoMapDef: {
            isAlbedoMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_6 + BrdBlm_eTextureType.ALBEDO,
            uScale: 1,
            vScale: 1,
        },
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eThresholdFinish.THRE_6 + BrdBlm_eTextureType.BUMP,
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