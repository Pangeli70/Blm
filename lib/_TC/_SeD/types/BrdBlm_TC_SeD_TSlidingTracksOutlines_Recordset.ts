/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20231108
 * @version 0.2 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */


import { A3D } from "../../../deps.ts";
import {
  BrdBlm_TC_SeD_eSlidingTracksOutlineType } from "../enums/BrdBlm_TC_SeD_eSlidingTracksOutlineType.ts";


/**
 * Recordset per la gestione dei profili di estrusione delle guide di scorrimento
 * dei portoni sezionali
 */
export type BrdBlm_TC_SeD_TSlidingTracksOutlines_Recordset = Record<
  BrdBlm_TC_SeD_eSlidingTracksOutlineType,
  A3D.ApgA3D_IPoint2D[]
>;
