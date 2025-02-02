/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20231229
 * ----------------------------------------------------------------------------
 */

import {
  ApgA3D_IIntExtOutlines } from "../../../../../A3D/lib/interfaces/ApgA3D_IIntExtOutlines.ts";
import {
  BrdBlm_TC_SeD_eFoamedPanelsOutline } from "../enums/BrdBlm_TC_SeD_eFoamedPanelsOutline.ts";


/**
 * Recordset per la gestione dei profili di estrusione delle sezioni
 * dei portoni sezionali
 */
export type BrdBlm_TC_SeD_TSectionsOutlines_Recordset = Record<
  BrdBlm_TC_SeD_eFoamedPanelsOutline,
  ApgA3D_IIntExtOutlines
>;
