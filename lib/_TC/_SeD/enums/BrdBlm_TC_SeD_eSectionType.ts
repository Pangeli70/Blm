/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20231108
 * @version 0.2 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Tipi di sezioni
 */
export enum BrdBlm_TC_SeD_eSectionType {

  /** Non definito */
  UNDEFINED = "",

  /** Flat non nervato */
  FLAT = "63",
  /** Single nervatura centrale */
  SINGLE = "64",
  /** Single nervatura alta */
  SINGLE_H = "64_HIGH",
  /** Single nervatura bassa */
  SINGLE_L = "64_LOW",
  /** Nervatura multipla */
  MULTI = "65",
  /** Ondulato */
  MULTIRIB = "81",
  /** Cassettato */
  BLOCKS = "66",
  /** Cassetta alta */
  BLOCKS_H = "66_HIGH",
  /** Cassetta bassa */
  BLOCKS_L = "66_LOW",

  /** VISA Luxor intermedia */
  LUXOR = "LUXOR",
  /** VISA Luxor alta */
  LUXOR_HIGH = "LUXOR_HIGH",
  /** VISA Luxor bassa */
  LUXOR_LOW = "LUXOR_LOW",
  /** VISA Lux intermedia */
  LUX = "LUX",
  /** VISA Lux alta */
  LUX_HIGH = "LUX_HIGH",
  /** VISA Lux bassa */
  LUX_LOW = "LUX_B",
  /** VISA Full Vision intermedia */
  FULL_VISION = "FULL_VISION",
  /** VISA Full Vision alta */
  FULL_VISION_HIGH = "FULL_VISION_HIGH",
  /** VISA Full Vision bassa */
  FULL_VISION_LOW = "FULL_VISION_LOW"
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
