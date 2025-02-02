/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import { BrdBlm_eGlossRoughness } from "../../../enums/BrdBlm_eGlossRoughness.ts";
import { A3D,
    Uts } from "../deps.ts";
import { BrdBlm_TC_Ctx_ePavementColor } from "../enums/BrdBlm_TC_Ctx_ePavementColor.ts";
import { BrdBlm_TC_Ctx_ePavementFinish } from "../enums/BrdBlm_TC_Ctx_ePavementFinish.ts";
import { BrdBlm_TC_Ctx_TPavementFinishRecordset } from "../types/BrdBlm_TC_Ctx_TPavementFinishRecordset.ts";



export const BrdBlm_TC_Ctx_PavementFinishRecordset: BrdBlm_TC_Ctx_TPavementFinishRecordset =
{
    [BrdBlm_TC_Ctx_ePavementFinish.LBlocks]: {
        id: BrdBlm_TC_Ctx_ePavementFinish.LBlocks,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.LBlocks + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.MixedSquares]: {
        id: BrdBlm_TC_Ctx_ePavementFinish.MixedSquares,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.MixedSquares + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.Octagons]: {
        id: BrdBlm_TC_Ctx_ePavementFinish.Octagons,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.Octagons + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.LBlocksTwirled]: {
        id: BrdBlm_TC_Ctx_ePavementFinish.LBlocksTwirled,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.LBlocksTwirled + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.LBlocksSmall]: {
        id: BrdBlm_TC_Ctx_ePavementFinish.LBlocksSmall,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.LBlocksSmall + A3D.ApgA3D_eTextureType.BUMP,
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.MickeySquares]: {
        id: BrdBlm_TC_Ctx_ePavementFinish.MickeySquares,
        color: 0xffffff,
        colors: Uts.ApgUts_Enum.GetAsArray(BrdBlm_TC_Ctx_ePavementColor),
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMapDef: {
            isBumpMap: true,
            CDNAssetId: BrdBlm_TC_Ctx_ePavementFinish.MickeySquares + A3D.ApgA3D_eTextureType.BUMP,
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