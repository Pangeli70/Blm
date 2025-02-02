/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import { BrdBlm_eMicaceousFinish } from "../enums/BrdBlm_eMicaceousFinish.ts";
import { BrdBlm_IMultilanguage } from "../interfaces/BrdBlm_IMultilanguage.ts";



type BrdBlm_TMicaeousFinishes_MultilangRecordset = Record<
    BrdBlm_eMicaceousFinish,
    BrdBlm_IMultilanguage
>;


export const BrdBlm_MicaeousFinishes_MultilangRecordset: BrdBlm_TMicaeousFinishes_MultilangRecordset = {
    
    [BrdBlm_eMicaceousFinish.SIVER_GRAY]: {
        it: "Verniciato Grigio Argento Micaceo",
        en: "Silver gray micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.METALLIC_GRAY]: {
        it: "Verniciato Grigio Metallico Micaceo",
        en: "Metallic gray micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.GRAPHITE_GRAY]: {
        it: "Verniciato Grigio Grafite Micaceo",
        en: "Grahite gray micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.SMOKE_BLACK]: {
        it: "Verniciato Nero Fumo Micaceo",
        en: "Smoke black micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.PINE_GREEN]: {
        it: "Verniciato Verde Pino Micaceo",
        en: "Pine green micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.ANCIENT_RED]: {
        it: "Verniciato Rosso Antico Micaceo",
        en: "Ancient red micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.BURNT_SOIL]: {
        it: "Verniciato Terra Bruciata Micaceo",
        en: "Burnt soil micaceous coating"
    }
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