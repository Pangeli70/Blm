/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231108 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Disegno delle sezioni del portone sezionale come da colonna ID tabella
 * [Tabelle configurazioni porte] -> [Disegni manto]
 */
export enum BrdBlm_TC_SeD_eDesign {
  FLAT = "63",
  FLAT_VERT = "69",

  SINGLE = "64",
  SINGLE_VERT = "73",

  MULTI = "65",
  MULTI_VERT = "68",

  MULTIRIB = "81",
  MULTIRIB_VERT = "82",


  /** Cassettato */
  BLOCKS = "66",

  /** Cassettato verticale */
  BLOCKS_VERT = "74",


  /** Non definito nella tabella */
  VISA_LUXOR = "97",
  /** Non definito nella tabella */
  VISA_LUX = "98",
  /** Non definito nella tabella */
  VISA_FULL_VISION = "99"
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