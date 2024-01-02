/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_V_eClutterType
} from "../enums/BrdBlm_TC_SeD_V_eClutterType.ts";
import {
    BrdBlm_TC_SeD_V_eLiftingAidType
} from "../enums/BrdBlm_TC_SeD_V_eLiftingAidType.ts";


/**
 * Definizione dell'ingombro residuo che riduce la altezza utile di passaggio
 * a seconda delle caratteristiche del portone sezionale a scorrimento verticale
 */
export interface BrdBlm_TC_SeD_V_INetPassageHeightClutter { 

    /**
     * Tipo di ingombro in luce a seconda delle caratteristiche del manto
     */
    readonly clutterType: BrdBlm_TC_SeD_V_eClutterType,

    /**
     * Tipo di ausilio al sollevamento
     */
    readonly liftingAidType: BrdBlm_TC_SeD_V_eLiftingAidType
    
    /**
     * Valore dell'ingombro residuo in luce. Corrisponde al valore G7 nelle
     * schede scorrimento della Extranet
     */
    readonly value: number
}