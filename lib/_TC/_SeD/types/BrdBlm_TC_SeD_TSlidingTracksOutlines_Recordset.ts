/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20231108
 * @version 0.2 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_IPoint2D
} from "../../../interfaces/BrdBlm_IPoint2D.ts";
import {
  BrdBlm_TC_SeD_eSlidingTracksOutlineType
} from "../enums/BrdBlm_TC_SeD_eSlidingTracksOutlineType.ts";


/**
 * Recordset per la gestione dei profili di estrusione delle guide di scorrimento
 * dei portoni sezionali
 */
export type BrdBlm_TC_SeD_TSlidingTracksOutlines_Recordset = Record<
  BrdBlm_TC_SeD_eSlidingTracksOutlineType,
  BrdBlm_IPoint2D[]
>;
