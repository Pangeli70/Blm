/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_eDesign
} from "../../enums/BrdBlm_TC_SeD_eDesign.ts";
import {
    BrdBlm_IMultilanguage
} from "../../../../interfaces/BrdBlm_IMultilanguage.ts";


type BrdBlm_TC_SeD_TDesigns_MultilangRecordset = Record<
    BrdBlm_TC_SeD_eDesign,
    BrdBlm_IMultilanguage
>;


export const BrdBlm_TC_SeD_Designs_MultilangRecordset: BrdBlm_TC_SeD_TDesigns_MultilangRecordset = {
    
    [BrdBlm_TC_SeD_eDesign.FLAT]: {
        it: "Flat",
    },

    [BrdBlm_TC_SeD_eDesign.FLAT_VERT]: {
        it: "Flat verticale",
    },

    [BrdBlm_TC_SeD_eDesign.SINGLE]: {
        it: "Single",
    },

    [BrdBlm_TC_SeD_eDesign.SINGLE_VERT]: {
        it: "Single verticale",
    },

    [BrdBlm_TC_SeD_eDesign.MULTI]: {
        it: "Multi",
    },

    [BrdBlm_TC_SeD_eDesign.MULTI_VERT]: {
        it: "Multi verticale",
    },

    [BrdBlm_TC_SeD_eDesign.BLOCKS]: {
        it: "Cassettato",
    },

    [BrdBlm_TC_SeD_eDesign.BLOCKS_VERT]: {
        it: "Cassettato verticale",
    },

    [BrdBlm_TC_SeD_eDesign.MULTIRIB]: {
        it: "Multirib",
    },

    [BrdBlm_TC_SeD_eDesign.MULTIRIB_VERT]: {
        it: "Multirib verticale",
    },

    [BrdBlm_TC_SeD_eDesign.VISA_LUX]: {
        it: "Visa Lux",
    },

    [BrdBlm_TC_SeD_eDesign.VISA_LUXOR]: {
        it: "Visa Luxor",
    },

    [BrdBlm_TC_SeD_eDesign.VISA_FULL_VISION]: {
        it: "Visa Full vision",
    },
};


/*! ---------------------------------------------------------------------------
 * @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
 * All rights reserved 
 * @licence You cannot host, display, distribute or share this Work in any 
 * form, both physical and digital. You cannot use this Work in any commercial
 * or non-commercial product, website or project. You cannot sell this Work
 * and you cannot mint an NFTs out of it.
 * --------------------------------------------------------------------------- 
 */