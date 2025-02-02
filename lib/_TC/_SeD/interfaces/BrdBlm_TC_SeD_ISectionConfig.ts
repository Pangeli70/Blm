/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_SeD_eSectionFamily } from "../enums/BrdBlm_TC_SeD_eSectionFamily.ts";
import {
  BrdBlm_TC_SeD_ISectionFillingConfig } from "./BrdBlm_TC_SeD_ISectionFillingConfig.ts";
import {
  BrdBlm_TC_SeD_ISectionHoleConfig } from "./BrdBlm_TC_SeD_ISectionHoleConfig.ts";

/**
 * Definizione della configurazione della sezione del portone sezionale
 * Utile per Portoni sezionali, Phenix, Swing e Ibis
 */
export interface BrdBlm_TC_SeD_ISectionConfig {

  /**
   * @optional
   * Tipo di sezione
   */
  family?: BrdBlm_TC_SeD_eSectionFamily;

  /**
   * Altezza del pannello coibentato prima del taglio o della sezione Visa
   */
  h: number;

  /**
   * Altezza del pannello coibentato tagliato dal lato maschio
   */
  topCut?: number;

  /**
   * Altezza del pannello coibentato tagliato dal lato femmina
   */
  bottomCut?: number;

  /**
   * Elenco dei fori sulla sezione
   */
  holes?: BrdBlm_TC_SeD_ISectionHoleConfig[];

  /**
   * Elenco dei tamponamenti per la sezione vetrata
   */
  fillings?: BrdBlm_TC_SeD_ISectionFillingConfig[];
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
