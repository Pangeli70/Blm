/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_SeD_V_eModel
} from "../enums/BrdBlm_TC_SeD_V_eModel.ts";

/**
 * Definizione della configurazione della porta pedonale inserita nel portone sezionale
 * Utile per i portoni Sezionali, Swing e Ibis (Phenix non ha la porta inserita)
 */
export interface BrdBlm_TC_SeD_V_IWicketDoorConfig {

  // Posizione della porta pedonale inserita da sinistra vista esterna
  x: number;

  /**
   * Larghezza nominale della porta pedonale inserita
   */
  w: number;

  /**
   * La porta pedonale inserita ha l'apertura a spingere verso l'esterno verso destra
   */
  isRightOpening: boolean;

  /**
   * La porta pedonale inserita ha la soglia ribassata
   */
  hasLoweredThreshold: boolean;

  /**
   * Modello del portone sezionale
   */
  model: BrdBlm_TC_SeD_V_eModel;

  /**
   * Lunghezza della sezione del portone
   */
  sectionLength: number;

  /**
   * Altezze delle sezioni del portone 
   */
  sectionsHeights: number[];



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
