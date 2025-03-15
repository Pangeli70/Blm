/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import { Uts } from "../../../../deps.ts";
import { BrdBlm_TC_SeD_eDesign } from "../../enums/BrdBlm_TC_SeD_eDesign.ts";



type BrdBlm_TC_SeD_TDesigns_MultilangRecordset = Record<
    BrdBlm_TC_SeD_eDesign,
    Uts.ApgUts_IMultilanguage
>;


export const BrdBlm_TC_SeD_Designs_MultilangRecordset: BrdBlm_TC_SeD_TDesigns_MultilangRecordset = {
    
    [BrdBlm_TC_SeD_eDesign.FLAT]: {
        EN: "Flat",
    },

    [BrdBlm_TC_SeD_eDesign.FLAT_VERT]: {
        EN: "Flat verticale",
    },

    [BrdBlm_TC_SeD_eDesign.SINGLE]: {
        EN: "Single",
    },

    [BrdBlm_TC_SeD_eDesign.SINGLE_VERT]: {
        EN: "Single verticale",
    },

    [BrdBlm_TC_SeD_eDesign.MULTI]: {
        EN: "Multi",
    },

    [BrdBlm_TC_SeD_eDesign.MULTI_VERT]: {
        EN: "Multi verticale",
    },

    [BrdBlm_TC_SeD_eDesign.BLOCKS]: {
        EN: "Cassettato",
    },

    [BrdBlm_TC_SeD_eDesign.BLOCKS_VERT]: {
        EN: "Cassettato verticale",
    },

    [BrdBlm_TC_SeD_eDesign.MULTIRIB]: {
        EN: "Multirib",
    },

    [BrdBlm_TC_SeD_eDesign.MULTIRIB_VERT]: {
        EN: "Multirib verticale",
    },

    [BrdBlm_TC_SeD_eDesign.VISA_LUX]: {
        EN: "Visa Lux",
    },

    [BrdBlm_TC_SeD_eDesign.VISA_LUXOR]: {
        EN: "Visa Luxor",
    },

    [BrdBlm_TC_SeD_eDesign.VISA_FULL_VISION]: {
        EN: "Visa Full vision",
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