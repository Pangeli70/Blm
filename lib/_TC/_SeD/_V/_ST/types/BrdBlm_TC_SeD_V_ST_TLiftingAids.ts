/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_V_eLiftingAidType
} from "../../enums/BrdBlm_TC_SeD_V_eLiftingAidType.ts";


/**
 * Definizione del Record per le tipologie di ausili al sollevamento ammessi 
 * per i sistemi di guide si scorrimento per i portoni sezionali a scorrimento
 * verticale
 */
export type BrdBlm_TC_SeD_V_ST_TLiftingAids = Record<
    BrdBlm_TC_SeD_V_eLiftingAidType,
    boolean
>