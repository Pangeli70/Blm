/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import {
  ApgA3D_Extrudable } from "../../../../../../../../A3D/lib/classes/ApgA3D_Extrudable.ts";
import {
  BrdBlm_TC_SeD_eSlidingTrackFinish } from "../../../../enums/BrdBlm_TC_SeD_eSlidingTrackFinish.ts";
import {
  BrdBlm_TC_SeD_eSlidingTracksOutlineType } from "../../../../enums/BrdBlm_TC_SeD_eSlidingTracksOutlineType.ts";
import {
  BrdBlm_TC_SeD_V_ST_RULES } from "../../consts/BrdBlm_TC_SeD_V_ST_RULES.ts";
import {
  BrdBlm_TC_SeD_V_ST_ePartName } from "../../enums/BrdBlm_TC_SeD_V_ST_ePartName.ts";


/**
 * Profilati di lamiera del sistema di scorrimento delle guide dei portoni
 * sezionali a scorrimento verticale. Può essere uno spezzone estruso
 * linearmente o una curva estrusa lungo un percorso.
 */
export class BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal extends ApgA3D_Extrudable {


  /**
   * Nome del profilato
   */
  name = BrdBlm_TC_SeD_V_ST_ePartName.ANGLE_BARS_FIRST_STRETCH;

  /**
   * Tipo di finitura della lamiera usata per la produzione del profilato
   */
  finish = BrdBlm_TC_SeD_eSlidingTrackFinish.GALVANIZED;

  /**
   * Tipo di profilo
   */
  outlineType = BrdBlm_TC_SeD_eSlidingTracksOutlineType.UNDEFINED;

  /**
   * Spessore della lamiera
   */
  sheetMetalWidth: number = BrdBlm_TC_SeD_V_ST_RULES.SHEET_METAL_LIGHT_WIDTH;


  /**
   * E' un tratto lineare
   */
  isStretch?: boolean;

  /**
   * E' una curva
   */
  isCurve?: boolean;


}
