7/** ---------------------------------------------------------------------------
import { Uts } from "../../../deps.ts";
import { Uts } from "../../../deps.ts";
import { Uts } from "../../../deps.ts";
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
    BrdBlm_IMaterialDef_Signature
} from "../../../interfaces/BrdBlm_IMaterialDef.ts";
import {
    BrdBlm_eTextureType
} from "../../../mod.ts";
import {
    BrdBlm_TC_Ctx_eFacadeColor
} from "../enums/BrdBlm_TC_Ctx_eFacadeColor.ts";
import {
    BrdBlm_TC_Ctx_eFacadeFinish
} from "../enums/BrdBlm_TC_Ctx_eFacadeFinish.ts";
import {
    BrdBlm_TC_Ctx_TFacadeFinishRecordset
} from "../types/BrdBlm_TC_Ctx_TFacadeFinishRecordset.ts";



export const BrdBlm_TC_Ctx_FacadeFinishRecordset: BrdBlm_TC_Ctx_TFacadeFinishRecordset =
{

    [BrdBlm_TC_Ctx_eFacadeFinish.CONCRETE]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eFacadeFinish.CONCRETE,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eFacadeColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFacadeFinish.CONCRETE + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.UGLY_PLASTER]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eFacadeFinish.UGLY_PLASTER,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eFacadeColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFacadeFinish.UGLY_PLASTER + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.SCRATCHED_PLASTER]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eFacadeFinish.SCRATCHED_PLASTER,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eFacadeColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFacadeFinish.SCRATCHED_PLASTER + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.RAW_PLASTER]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eFacadeFinish.RAW_PLASTER,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eFacadeColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFacadeFinish.RAW_PLASTER + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.FINE_BLOCKS]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eFacadeFinish.FINE_BLOCKS,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eFacadeColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFacadeFinish.FINE_BLOCKS + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.FINE_MORTAR]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_eFacadeFinish.FINE_MORTAR,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_eFacadeColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_eFacadeFinish.FINE_MORTAR + BrdBlm_eTextureType.BUMP,
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