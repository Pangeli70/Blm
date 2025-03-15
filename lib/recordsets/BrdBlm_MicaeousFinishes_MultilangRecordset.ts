/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import { Uts } from "../deps.ts";
import { BrdBlm_eMicaceousFinish } from "../enums/BrdBlm_eMicaceousFinish.ts";




type BrdBlm_TMicaeousFinishes_MultilangRecordset = Record<
    BrdBlm_eMicaceousFinish,
    Uts.ApgUts_IMultilanguage
>;


export const BrdBlm_MicaeousFinishes_MultilangRecordset: BrdBlm_TMicaeousFinishes_MultilangRecordset = {
    
    [BrdBlm_eMicaceousFinish.SIVER_GRAY]: {
        IT: "Verniciato Grigio ArgENto Micaceo",
        EN: "Silver gray micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.METALLIC_GRAY]: {
        IT: "Verniciato Grigio Metallico Micaceo",
        EN: "Metallic gray micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.GRAPHITE_GRAY]: {
        IT: "Verniciato Grigio Grafite Micaceo",
        EN: "Grahite gray micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.SMOKE_BLACK]: {
        IT: "Verniciato Nero Fumo Micaceo",
        EN: "Smoke black micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.PINE_GREEN]: {
        IT: "Verniciato Verde Pino Micaceo",
        EN: "Pine greEN micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.ANCIENT_RED]: {
        IT: "Verniciato Rosso Antico Micaceo",
        EN: "AnciENt red micaceous coating"
    },

    [BrdBlm_eMicaceousFinish.BURNT_SOIL]: {
        IT: "Verniciato Terra Bruciata Micaceo",
        EN: "Burnt soil micaceous coating"
    }
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