/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_Se_FP]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231116
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_eFinish
} from "../../enums/BrdBlm_TC_SeD_eFinish.ts";
import {
    BrdBlm_TC_SeD_eFinishVariant
} from "../../enums/BrdBlm_TC_SeD_eFinishVariant.ts";
import {
    BrdBlm_TC_SeD_eSectionFamily
} from "../../enums/BrdBlm_TC_SeD_eSectionFamily.ts";
import {
    BrdBlm_TC_SeD_eSectionType
} from "../../enums/BrdBlm_TC_SeD_eSectionType.ts";
import {
    BrdBlm_TC_SeD_ISectionParams, BrdBlm_TC_SeD_ISectionParams_Signature
} from "../../interfaces/BrdBlm_TC_SeD_ISectionParams.ts";



/**
 * Test per i pannelli schiumati delle sezioni dei portoni sezionali
 */
export const BrdBlm_TC_SeD_FP_Tests: BrdBlm_TC_SeD_ISectionParams[] = [
    {
        signature: BrdBlm_TC_SeD_ISectionParams_Signature,
        name: 'Flat-1',
        sequence: 1,
        family: BrdBlm_TC_SeD_eSectionFamily.FOAMED,
        type: BrdBlm_TC_SeD_eSectionType.FLAT,
        extFinish: BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_5010,
        intFinish: BrdBlm_TC_SeD_eFinish.PRE_LAQ_C21,
        variant: BrdBlm_TC_SeD_eFinishVariant.STUCCO,
        length: 3020,
        height: 615,
        topCut: 0,
        bottomCut: 0,
        displacement: 55,
        inserts: [],
    } as const,
    {
        signature: BrdBlm_TC_SeD_ISectionParams_Signature,
        name: 'Multi-1',
        sequence: 2,
        family: BrdBlm_TC_SeD_eSectionFamily.FOAMED,
        type: BrdBlm_TC_SeD_eSectionType.MULTI,
        extFinish: BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_3000,
        intFinish: BrdBlm_TC_SeD_eFinish.PRE_LAQ_C21,
        variant: BrdBlm_TC_SeD_eFinishVariant.WOOD_GRAIN,
        length: 3020,
        height: 615,
        topCut: 0,
        bottomCut: 0,
        displacement: 615 + 55,
        inserts: [],
    } as const,
    {
        signature: BrdBlm_TC_SeD_ISectionParams_Signature,
        name: 'Single-1',
        sequence: 3,
        family: BrdBlm_TC_SeD_eSectionFamily.FOAMED,
        type: BrdBlm_TC_SeD_eSectionType.SINGLE,
        extFinish: BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_6005,
        intFinish: BrdBlm_TC_SeD_eFinish.PRE_LAQ_C21,
        variant: BrdBlm_TC_SeD_eFinishVariant.SMOOTH,
        length: 3020,
        height: 615,
        topCut: 0,
        bottomCut: 0,
        displacement: 615 + 615 + 55,
        inserts: [],
    } as const,
    {
        signature: BrdBlm_TC_SeD_ISectionParams_Signature,
        name: 'Multirib-1',
        sequence: 4,
        family: BrdBlm_TC_SeD_eSectionFamily.FOAMED,
        type: BrdBlm_TC_SeD_eSectionType.MULTIRIB,
        extFinish: BrdBlm_TC_SeD_eFinish.PRE_LAQ_C17,
        intFinish: BrdBlm_TC_SeD_eFinish.PRE_LAQ_C21,
        variant: BrdBlm_TC_SeD_eFinishVariant.MULTIRIB,
        length: 3020,
        height: 615,
        topCut: 560,
        bottomCut: 0,
        displacement: 615 + 615 + 615 + 55,
        inserts: [],
    } as const
];