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
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_pavement_LBlocks_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.MixedSquares]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.MixedSquares,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_pavement_MixedSquares_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.Octagons]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.Octagons,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_pavement_Octagons_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.LBlocksTwirled]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.LBlocksTwirled,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_pavement_LBlocksTwirled_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.LBlocksSmall]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.LBlocksSmall,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_pavement_LBlocksSmall_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
        }
    },
    [BrdBlm_TC_Ctx_ePavementFinish.MickeySquares]: {
        signature: BrdBlm_IMaterialDef_Signature,
        id: BrdBlm_TC_Ctx_ePavementFinish.MickeySquares,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_pavement_MickeySquares_BumpMap",
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