/*! ---------------------------------------------------------------------------
 * @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
 * All rights reserved
 * @licence You cannot host, display, distribute or share this Work in any
 * form, both physical and digital. You cannot use this Work in any commercial
 * or non-commercial product, website or project. You cannot sell this Work
 * and you cannot mint an NFTs out of it.
 * ---------------------------------------------------------------------------
 */
/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231108 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Trasparenza dei tamponamenti dei prodotti Breda (es. Visa)
 */
export enum BrdBlm_TC_eFillingTransparency {

  TRANSPARENT = 1,
  OPALINE = 0.2,
  SATIN = 0.4,
  BRONZED = 0.9,
  DARK = 0.9,
  SILVER = 0,
  WHITE_C21 = 0,
  BLACK = 0,
  RAL = 0
}
