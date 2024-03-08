7/** ---------------------------------------------------------------------------
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
    BrdBlm_TC_Ctx_eFacadeFinish
} from "../enums/BrdBlm_TC_Ctx_eFacadeFinish.ts";
import {
    BrdBlm_TC_Ctx_TFacadeFinishRecordset
} from "../types/BrdBlm_TC_Ctx_TFacadeFinishRecordset.ts";


export const BrdBlm_TC_Ctx_FacadeFinishRecordset: BrdBlm_TC_Ctx_TFacadeFinishRecordset =
{
    
    [BrdBlm_TC_Ctx_eFacadeFinish.CONCRETE]: {
        signature: BrdBlm_IMaterialDef_Signature,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_facade_Concrete_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
            canRotate: true
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.UGLY_PLASTER]: {
        signature: BrdBlm_IMaterialDef_Signature,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "",
            uScale: 1,
            vScale: 1,
            depth: 1,
            canRotate: true
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.SCRATCHED_PLASTER]: {
        signature: BrdBlm_IMaterialDef_Signature,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_facade_ScratchedPlaster_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
            canRotate: true
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.RAW_PLASTER]: {
        signature: BrdBlm_IMaterialDef_Signature,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_facade_RawPlaster_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
            canRotate: true
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.FINE_BLOCKS]: {
        signature: BrdBlm_IMaterialDef_Signature,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_facade_FineBlocks_BumpMap",
            uScale: 1,
            vScale: 1,
            depth: 1,
            canRotate: false
        }
    },

    [BrdBlm_TC_Ctx_eFacadeFinish.FINE_MORTAR]: {
        signature: BrdBlm_IMaterialDef_Signature,
        color: 0xffffff,
        roughness: BrdBlm_eGlossRoughness.ROUGH,
        bumpMap: {
            cdnAsset: "context_outdoor_facade_FineMortar_BumpMap",
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