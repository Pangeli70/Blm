/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Tipi di configurazioni del manto che possono influire sugli ingombri che 
 * residui che possono ridurre la altezza utile di passaggio per i portoni sezionali
 * a scorrimento verticale
 */
export enum BrdBlm_TC_SeD_V_eClutterType {

    BASE = 'Base',

    STOP_AND_GO = 'Inserted pedestrian door',
    
    LOWERED_THRESHOLD = 'Inserted pedestrian door and lowered threshold'
    
}