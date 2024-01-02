/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_eConfiguration
} from "../../enums/BrdBlm_TC_SeD_eConfiguration.ts";
import {
    BrdBlm_IMultilanguage
} from "../../../../interfaces/BrdBlm_IMultilanguage.ts";


type BrdBlm_TC_SeD_TConfigurations_MultilangRecordset = Record<
    BrdBlm_TC_SeD_eConfiguration,
    BrdBlm_IMultilanguage
>;

export const BrdBlm_TC_SeD_Configurations_MultilangRecordset: BrdBlm_TC_SeD_TConfigurations_MultilangRecordset = {
    
    [BrdBlm_TC_SeD_eConfiguration.BASE]: {
        it: "Base",
    },

    [BrdBlm_TC_SeD_eConfiguration.STOP_AND_GO]: {
        it: "Stop&Go",
    },

    [BrdBlm_TC_SeD_eConfiguration.VISA]: {
        it: "Visa",
    },
    
    [BrdBlm_TC_SeD_eConfiguration.VISA_STOP_AND_GO]: {
        it: "Visa Stop&Go",
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
