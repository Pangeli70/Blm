/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_Se_FP]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231116
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_eSectionFamily
} from "../enums/BrdBlm_TC_SeD_eSectionFamily.ts";
import {
    BrdBlm_TC_SeD_eSectionType
} from "../enums/BrdBlm_TC_SeD_eSectionType.ts";
import {
    BrdBlm_TC_SeD_ISectionParams
} from "../interfaces/BrdBlm_TC_SeD_ISectionParams.ts";


/**
 * Test per i pannelli schiumati delle sezioni dei portoni sezionali
 */
export const BrdBlm_TC_SeD_Se_FP_Tests: BrdBlm_TC_SeD_ISectionParams[] = [
    {
        name: 'Flat-1',
        sequence:1,
        family: BrdBlm_TC_SeD_eSectionFamily.FOAMED,
        type: BrdBlm_TC_SeD_eSectionType.FLAT,
        length: 3020,
        height: 615,
        topCut: 0,
        bottomCut: 0,
        displacement: 0,
        inserts: [],
    } as const
];