/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_V_INetPassageHeightClutter
} from "../../interfaces/BrdBlm_TC_SeD_V_IClutter.ts";
import {
    BrdBlm_TC_SeD_V_eSlidingSystem
} from "../../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";
import {
    BrdBlm_TC_SeD_V_ST_TLiftingAids
} from "../types/BrdBlm_TC_SeD_V_ST_TLiftingAids.ts";


/**
 * Dati tecnici caratteristici del sistema di guide di scorrimento per i portoni
 * sezionali a scorrimento verticale
 */
export interface BrdBlm_TC_SeD_V_ST_IData {

    /**
     * Identificatore del tipo di sistema di guide di scorrimento
     */
    system: BrdBlm_TC_SeD_V_eSlidingSystem,

    /**
     * Larghezza contabile minima
     */
    minWidth: number,
    /**
     * Larghezza contabile massima
     */
    maxWidth: number,

    /**
     * Altezza contabile minima
     */
    minHeight: number,
    /**
     * Altezza contabile massima
     */
    maxHeight: number,


    /**
     * Architrave contabile minimo 
     */
    minLintel: number,
    /**
     * Architrave contabile massimo (Ha senso solo per gli scorrimenti S3, S3i ed S3R)
     */
    maxLintel: number,

    /**
     * Spalletta laterale minima non motorizzata
     * TODO Qui non va bene per certi scorrimenti con tamburi grandi la spalletta
     * minima va aumentata oltre certe dimensioni -- APG 20231226 
     */
    minEmbrasure: number,

    /**
     * Inclinazione massima delle guide per gli scorrimenti inclinati
     */
    maxInclination: number,

    /**
     * Ingombri a seconda delle configurazioni del manto e del tipo di ausili
     * al sollevamento
     */
    clutters: BrdBlm_TC_SeD_V_INetPassageHeightClutter[],

    /**
     * Ausili di sollevamento ammessi per questo tipo di scorrimento
     */
    liftingAids: BrdBlm_TC_SeD_V_ST_TLiftingAids
}