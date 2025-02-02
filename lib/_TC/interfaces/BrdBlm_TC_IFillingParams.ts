/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_eFillingColor } from "../enums/BrdBlm_TC_eFillingColor.ts";
import {
  BrdBlm_TC_eFillingTransparency } from "../enums/BrdBlm_TC_eFillingTransparency.ts";
import {
  BrdBlm_TC_eFillingType } from "../enums/BrdBlm_TC_eFillingType.ts";

/**
 * Dati del tamponamento dell'inserto (oblò o griglia) o della sezione vetrata 
 * della chiusura tecnica
 */
export interface BrdBlm_TC_IFillingParams {

  /**
   * Codice articolo del tamponamento dell'inserto o della sezione visa.
   */
  code: string;

  /**
   * Tipo di tamponamento
   */
  type: BrdBlm_TC_eFillingType;

  /**
   * Spessore del tamponamento
   */
  width: number;

  /**
   * Colore del tamponamento
   */
  color: BrdBlm_TC_eFillingColor;

  /**
   * Trasparenza del tamponamento
   */
  frasnparency: BrdBlm_TC_eFillingTransparency;

  /**
   * Colore del tamponamento se ral
   */
  RALColor?: string;

}

/*! ---------------------------------------------------------------------------
 * @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
 * All rights reserved
 * @licence You cannot host, display, distribute or share this Work in any
 * form, both physical and digital. You cannot use this Work in any commercial
 * or non-commercial product, website or project. You cannot sell this Work
 * and you cannot mint an NFTs out of it.
 * ---------------------------------------------------------------------------
 */
