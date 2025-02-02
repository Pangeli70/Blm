/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_SeD_eDesign } from "../../enums/BrdBlm_TC_SeD_eDesign.ts";
import {
  BrdBlm_TC_SeD_eFinish } from "../../enums/BrdBlm_TC_SeD_eFinish.ts";
import {
  BrdBlm_TC_SeD_eVisaType } from "../../enums/BrdBlm_TC_SeD_eVisaType.ts";
import {
  BrdBlm_TC_SeD_ISectionParams } from "../../interfaces/BrdBlm_TC_SeD_ISectionParams.ts";
import {
  BrdBlm_TC_SeD_V_IWicketDoorParams } from "./BrdBlm_TC_SeD_V_IWicketDoorParams.ts";

/**
 * Definizione dei dati per la costruzione del portone sezionale a scorrimento
 * verticale
 */
export interface BrdBlm_TC_SeD_V_IDoorParams {

  /**
   * Larghezza contabile
   */
  width: number;
  /**
   * Altezza contabile
   */
  height: number;
  /**
   * Architrave contabile
   * */
  lintel: number;

  /**
   * Finitura standard
   */
  finish: BrdBlm_TC_SeD_eFinish;
  /**
   * Colore esterno se finitura fuori standard RAL o micaceo.
   */
  extColor: string;
  /**
   * Colore interno se finitura fuori standard RAL o micaceo.
   */
  intColor: string;

  /**
   * Disegno del pannello/sezione del portone
   */
  design: BrdBlm_TC_SeD_eDesign;
  /**
   * Tipo visa per le sezioni vetrate o nessuna Visa se solo pannelli coibentati
   */
  visaType: BrdBlm_TC_SeD_eVisaType;

  /**
   * Il portone ha la maniglia
   */
  hasHandle: boolean;
  /**
   * Il portone ha la soglia ribassata
   * */
  isLoweredTheshold: boolean;

  /**
   * Il portone ha la porta pedonale.
   */
  isStopAndGo: boolean;

  /**
   * Parametri di definizioni di tutte le sezioni del portone
   */
  sections: BrdBlm_TC_SeD_ISectionParams[];

  /**
   * Parametri di definizione della porta pedonale inserita
   */
  wicketDoor?: BrdBlm_TC_SeD_V_IWicketDoorParams;
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
