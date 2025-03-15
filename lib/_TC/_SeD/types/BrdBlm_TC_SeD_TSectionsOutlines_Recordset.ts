/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20231229
 * ----------------------------------------------------------------------------
 */


import { A3D } from "../../../deps.ts";
import {  BrdBlm_TC_SeD_eFoamedPanelsOutline } from "../enums/BrdBlm_TC_SeD_eFoamedPanelsOutline.ts";


/**
 * Recordset per la gestione dei profili di estrusione delle sezioni
 * dei portoni sezionali
 */
export type BrdBlm_TC_SeD_TSectionsOutlines_Recordset = Record<
  BrdBlm_TC_SeD_eFoamedPanelsOutline,
  A3D.ApgA3D_IIntExtOutlines
>;
