/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import { Uts } from "../../../../deps.ts";
import { BrdBlm_TC_SeD_eFinish } from "../../ENums/BrdBlm_TC_SeD_eFinish.ts";



export type BrdBlm_TC_SeD_TFinishes_MultilangRecordset = Record<
    BrdBlm_TC_SeD_eFinish,
    Uts.ApgUts_IMultilanguage
>;


export const BrdBlm_TC_SeD_Finishes_MultilangRecordset: BrdBlm_TC_SeD_TFinishes_MultilangRecordset = {

    [BrdBlm_TC_SeD_eFinish.NOT_STANDARD]: {
        IT: "Fuori standard",
        EN: "Not Stadard"
    },

    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C21]: {
        IT: "Pre verniciato Bianco C21",
        EN: "Pre laquered White C21"
    },

    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C81]: {
        IT: "Pre verniciato Bianco C81",
        EN: "Pre laquered White C81"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C81_FS]: {
        IT: "Pre verniciato Bianco C81 fuori stadard",
        EN: "Pre laquered White C81 out of standard"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C81_ALU]: {
        IT: "Verniciato a polvere Bianco C81",
        EN: "Powder coated White C81"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C17]: {
        IT: "Pre verniciato Marrone testa di moro C17",
        EN: "Pre laquered Brown C17"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_C17_FS]: {
        IT: "Pre verniciato Marrone Testa di Moro C17 Fuori standard",
        EN: "Pre laquered Brown C17 Out of standard"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_3000]: {
        IT: "Pre verniciato Rosso RAL 3000",
        EN: "Pre laquered Red RAL 3000"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_3000_FS]: {
        IT: "Pre verniciato Rosso RAL 3000 fuori standard",
        EN: "Pre laquered Red RAL 3000 out of standard"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_6005]: {
        IT: "Pre verniciato Verde RAL 6005",
        EN: "Pre laquered GreEN RAL 6005"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_6005_FS]: {
        IT: "Pre verniciato Verde RAL 6005 fuori standard",
        EN: "Pre laquered GreEN RAL 6005 Out of standard"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_5010]: {
        IT: "Pre verniciato Blu RAL 5010",
        EN: "RAL 5010"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_5010_FS]: {
        IT: "Pre verniciato Blu RAL 5010 Fuori standard",
        EN: "5010"
    },



    [BrdBlm_TC_SeD_eFinish.RAL_GLOSS_10_FS]: {
        IT: "Fuori standard RAL Opaco Gloss 10",
        EN: "Not Stadard RAL"
    },
    [BrdBlm_TC_SeD_eFinish.RAL_GLOSS_25_35_FS]: {
        IT: "Fuori standard RAL Semilucido Gloss 25-35",
        EN: "Not Stadard RAL"
    },

    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9016_SATIN]: {
        IT: "Pre verniciato Bianco RAL 9016 Satin",
        EN: "9016 Satin"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9016_SATIN_FS]: {
        IT: "Pre verniciato Bianco RAL 9016 Satin Fuori standard",
        EN: "9016 Satin"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9006]: {
        IT: "Pre verniciato Grigio RAL 9006",
        EN: "9006"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9006_SATIN]: {
        IT: "Pre verniciato Grigio RAL 9006 Satin",
        EN: "9006 Satin"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9006_FS]: {
        IT: "Pre verniciato Grigio RAL 9006 Fuori standard",
        EN: "9006"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_9006_SATIN_FS]: {
        IT: "Pre verniciato Grigio RAL 9006 Satin Fuori standard",
        EN: "9006 Satin"
    },


    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_7016]: {
        IT: "Pre verniciato Grigio 7016",
        EN: "7016"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_7016_SATIN]: {
        IT: "Pre verniciato Grigio RAL 7016 Satin",
        EN: "7016 Satin"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_7016_FS]: {
        IT: "Pre verniciato Grigio 7016 Fuori standard",
        EN: "7016"
    },
    [BrdBlm_TC_SeD_eFinish.PRE_LAQ_RAL_7016_SATIN_FS]: {
        IT: "Pre verniciato Grigio RAL 7016 Satin Fuori standard",
        EN: "7016 Satin"
    },


    [BrdBlm_TC_SeD_eFinish.MICACEOUS_FS]: {
        IT: "Verniciato Micaceo",
        EN: "Micaeous"
    },

    [BrdBlm_TC_SeD_eFinish.WOODLIKE_NUT]: {
        IT: "Simil legno Noce ultra touch",
        EN: "Wood like Nut ultra touch"
    },
    [BrdBlm_TC_SeD_eFinish.WOODLIKE_GOLDEN_OAK]: {
        IT: "Simil legno Quercia dorata",
        EN: "Wood like GoldEN oak"
    },
    [BrdBlm_TC_SeD_eFinish.WOODLIKE_LIGHT_OAK]: {
        IT: "Simil legno Quercia chiaro",
        EN: "Wood like Light Oak"
    },
    [BrdBlm_TC_SeD_eFinish.WOODLIKE_CONCRETE]: {
        IT: "Simil legno CemENto",
        EN: "Wood like concrete"
    },
    [BrdBlm_TC_SeD_eFinish.RUSTY]: {
        IT: "Rusty",
        EN: "Rusty"
    },



};

/*! ---------------------------------------------------------------------------
 * @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
 * All rights reserved 
 * @licENce You cannot host, display, distribute or share this Work in any 
 * form, both physical and digital. You cannot use this Work in any commercial
 * or non-commercial product, website or project. You cannot sell this Work
 * and you cannot mint an NFTs out of it.
 * --------------------------------------------------------------------------- 
 */
