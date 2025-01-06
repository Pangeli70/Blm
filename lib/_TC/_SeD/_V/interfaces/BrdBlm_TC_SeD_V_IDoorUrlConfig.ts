/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_IAccessoryConfig
} from "../../../interfaces/BrdBlm_TC_IAccessoryConfig.ts";
import {
  BrdBlm_TC_SeD_ISectionConfig
} from "../../interfaces/BrdBlm_TC_SeD_ISectionConfig.ts";
import {
  BrdBlm_TC_SeD_V_IWicketDoorConfig
} from "./BrdBlm_TC_SeD_V_IWicketDoorConfig.ts";

/**
 * Definizione della configurazione del portone sezionale completo di accessori.
 * Dato grezzo che arriva dall'url della pagina
 * Utile per Portoni Sezionali / Phenix / Swing / Ibis
 */
export interface BrdBlm_TC_SeD_V_IDoorUrlConfig {

  /**
   * @optional
   * Codice numerico marchio del portone (Breda, Bremet, ecc.)
   */
  brand?: number;
  /**
   * Codice numerico modello portone in base a marchio
   */
  model: number;
  /**
   * Codice scorrimento
   */
  sliding: string;

  /**
   * Larghezza portone in mm
   */
  W: number;
  /**
   * Altezza portone in mm
   */
  H: number;
  /**
   * Architrave portone in mm
   */
  h: number;
  /**
   * @optional
   * Inclinazione guide scorrimenti in gradi
   */
  a?: number;

  /**
   * Codice numerico configurazione (Base, Visa, Stip&Go ecc.)
   */
  configuration: number;
  /**
   * @optional
   * Codice numerico tipo VISA (Luxor, Lux, ecc.) se configurazione
   * prevede VISA
   */
  visaType?: number;

  /**
   * Codice numerico tipo finitura ( C21, C81, 7016, 7016 satin, 7016 fuori std. ecc.)
   */
  finish: number;
  /**
   * Codice numerico variante finitura (Stucco, wood grain ecc.)
   */
  variant: number;
  /**
   * Codice numerico disegno manto (Flat, single, multi ecc.)
   */
  design: number;
  /**
   * @optional
   * Sigla colore verniciatura lato esterno (RAL xxxx / Mxx)
   */
  extColor?: string;
  /**
   * @optional
   * Sigla colore verniciatura lato interno (RAL xxxx / Mxx)
   */
  intColor?: string;

  /**
   * Dati per sezioni del portone
   */
  sections: BrdBlm_TC_SeD_ISectionConfig[];

  /**
   * @optional
   * Dati porta pedonale inserita
   */
  wicketDoor?: BrdBlm_TC_SeD_V_IWicketDoorConfig;

  /**
   * Soglia ribassata. Deve essere con i dati del portone perchè può essere
   * impostato anche se non c'è la pedonale inserita
   */
  hasLoweredThreshold: boolean;

  /**
   * Forare per maniglia di sollevamento
   */
  hasHandle: boolean;

  /**
   * Elenco accessori
   */
  accessories: BrdBlm_TC_IAccessoryConfig[];

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