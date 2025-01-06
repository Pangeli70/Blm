/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_eFinish
} from "../../enums/BrdBlm_TC_SeD_eFinish.ts";
import {
    BrdBlm_IMultilanguage
} from "../../../../interfaces/BrdBlm_IMultilanguage.ts";



export type BrdBlm_TC_SeD_TFinishes_MultilangRecordset = Record<
    BrdBlm_TC_SeD_eFinish,
    BrdBlm_IMultilanguage
>;


export const BrdBlm_TC_SeD_Finishes_MultilangRecordset: BrdBlm_TC_SeD_TFinishes_MultilangRecordset = {

    [BrdBlm_TC_SeD_eFinish.NOT_STANDARD]: {
        it: "Fuori standard",
        en: "Not Stadard"
    },

    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C21]: {
        it: "Pre verniciato Bianco C21",
        en: "Pre laquered White C21"
    },

    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C81]: {
        it: "Pre verniciato Bianco C81",
        en: "Pre laquered White C81"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C81_FS]: {
        it: "Pre verniciato Bianco C81 fuori stadard",
        en: "Pre laquered White C81 out of standard"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C81_ALU]: {
        it: "Verniciato a polvere Bianco C81",
        en: "Powder coated White C81"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C17]: {
        it: "Pre verniciato Marrone testa di moro C17",
        en: "Pre laquered Brown C17"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C17_FS]: {
        it: "Pre verniciato Marrone Testa di Moro C17 Fuori standard",
        en: "Pre laquered Brown C17 Out of standard"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_3000]: {
        it: "Pre verniciato Rosso RAL 3000",
        en: "Pre laquered Red RAL 3000"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_3000_FS]: {
        it: "Pre verniciato Rosso RAL 3000 fuori standard",
        en: "Pre laquered Red RAL 3000 out of standard"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_6005]: {
        it: "Pre verniciato Verde RAL 6005",
        en: "Pre laquered Green RAL 6005"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_6005_FS]: {
        it: "Pre verniciato Verde RAL 6005 fuori standard",
        en: "Pre laquered Green RAL 6005 Out of standard"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_5010]: {
        it: "Pre verniciato Blu RAL 5010",
        en: "RAL 5010"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_5010_FS]: {
        it: "Pre verniciato Blu RAL 5010 Fuori standard",
        en: "5010"
    },



    [BrdBlm_TC_SeD_eFinish.RAL_GLOSS_10_FS]: {
        it: "Fuori standard RAL Opaco Gloss 10",
        en: "Not Stadard RAL"
    },
    [BrdBlm_TC_SeD_eFinish.RAL_GLOSS_25_35_FS]: {
        it: "Fuori standard RAL Semilucido Gloss 25-35",
        en: "Not Stadard RAL"
    },

    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9016_SATIN]: {
        it: "Pre verniciato Bianco RAL 9016 Satin",
        en: "9016 Satin"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9016_SATIN_FS]: {
        it: "Pre verniciato Bianco RAL 9016 Satin Fuori standard",
        en: "9016 Satin"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9006]: {
        it: "Pre verniciato Grigio RAL 9006",
        en: "9006"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9006_SATIN]: {
        it: "Pre verniciato Grigio RAL 9006 Satin",
        en: "9006 Satin"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9006_FS]: {
        it: "Pre verniciato Grigio RAL 9006 Fuori standard",
        en: "9006"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9006_SATIN_FS]: {
        it: "Pre verniciato Grigio RAL 9006 Satin Fuori standard",
        en: "9006 Satin"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_7016]: {
        it: "Pre verniciato Grigio 7016",
        en: "7016"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_7016_SATIN]: {
        it: "Pre verniciato Grigio RAL 7016 Satin",
        en: "7016 Satin"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_7016_FS]: {
        it: "Pre verniciato Grigio 7016 Fuori standard",
        en: "7016"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_7016_SATIN_FS]: {
        it: "Pre verniciato Grigio RAL 7016 Satin Fuori standard",
        en: "7016 Satin"
    },


    [BrdBlm_TC_SeD_eFinish.MICACEOUS_FS]: {
        it: "Verniciato Micaceo",
        en: "Micaeous"
    },

    [BrdBlm_TC_SeD_eFinish.WOODLIKE_NUT]: {
        it: "Simil legno Noce ultra touch",
        en: "Wood like Nut ultra touch"
    },
    [BrdBlm_TC_SeD_eFinish.WOODLIKE_GOLDEN_OAK]: {
        it: "Simil legno Quercia dorata",
        en: "Wood like Golden oak"
    },
    [BrdBlm_TC_SeD_eFinish.WOODLIKE_LIGHT_OAK]: {
        it: "Simil legno Quercia chiaro",
        en: "Wood like Light Oak"
    },
    [BrdBlm_TC_SeD_eFinish.WOODLIKE_CONCRETE]: {
        it: "Simil legno Cemento",
        en: "Wood like concrete"
    },
    [BrdBlm_TC_SeD_eFinish.RUSTY]: {
        it: "Rusty",
        en: "Rusty"
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
