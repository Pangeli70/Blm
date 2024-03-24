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
    BrdBlm_TC_Ctx_ePavementColor
} from "../enums/BrdBlm_TC_Ctx_ePavementColor.ts";
import {
    BrdBlm_TC_Ctx_ePavementFinish
} from "../enums/BrdBlm_TC_Ctx_ePavementFinish.ts";
import {
    BrdBlm_TC_Ctx_TPavementFinishRecordset
} from "../types/BrdBlm_TC_Ctx_TPavementFinishRecordset.ts";



export const BrdBlm_TC_Ctx_PavementFinishRecordset: BrdBlm_TC_Ctx_TPavementFinishRecordset =
{
    [BrdBlm_TC_Ctx_ePavementFinish.LBlocks]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.LBlocks,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.LBlocks + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.MixedSquares]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.MixedSquares,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.MixedSquares + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.Octagons]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.Octagons,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.Octagons + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.LBlocksTwirled]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.LBlocksTwirled,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.LBlocksTwirled + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.LBlocksSmall]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.LBlocksSmall,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.LBlocksSmall + BrdBlm_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.MickeySquares]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.MickeySquares,
        color: 0xffffff,
        colors: Uts.BrdUts.GetEnumAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.MickeySquares + BrdBlm_eTextureType.BUMP,
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