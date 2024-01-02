/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Tipi di ausili al sollevamento per i portoni sezionali a scorrimento verticale
 */
export enum BrdBlm_TC_SeD_V_eLiftingAidType  { 

    NONE = 'None',
    
    MANUAL_WINCH = 'Manual winch',
    
    PULLING_MOTOR = 'Pulling motor',
    
    DIRECT_MOTOR = 'Direct motor',

    CHAIN_AND_PINION = 'Direct motor with chain and pinion',


}