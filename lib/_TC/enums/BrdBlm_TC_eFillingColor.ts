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
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231108 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Colori dei tamponamenti dei prodotti Breda (es. Visa)
 */
export enum BrdBlm_TC_eFillingColor {

  TRANSPARENT = 0x000020,
  OPALINE = 0xF0F0F0,
  SATIN = 0xD0D0D0,
  BRONZED = 0x806060,
  DARK = 0x202020,
  SILVER = 0x808080,
  WHITE_C21 = 0xFAFADA,
  BLACK = 0x202020,
  RAL = -1

}
