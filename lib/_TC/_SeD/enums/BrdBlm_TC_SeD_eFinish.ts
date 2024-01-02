/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [DLV] De Luca Valentina
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG-DLV 20230802
 * @version 0.3 APG 20231108 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.4 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Finiture STANDARD + FUORI STANDARD dei pannelli dei portoni sezionali come
 * da colonna ID da tabella:
 * [Tabelle configurazioni porte] -> [Finiture] -> [Finitura]
 */
export enum BrdBlm_TC_SeD_eFinish {

  NOT_STANDARD = "1",

  PRE_LAQ_C21 = "2",

  PRE_LAQ_C81 = "20",
  PRE_LAQ_C81_FS = "93",
  PRE_LAQ_C81_ALU = "167",

  PRE_LAQ_C17 = "3",
  PRE_LAQ_C17_FS = "46",

  PRE_LAQ_RAL_9016_SATIN = "135",
  PRE_LAQ_RAL_9016_SATIN_FS = "129",

  PRE_LAQ_RAL_7016 = "104",
  PRE_LAQ_RAL_7016_FS = "103",
  PRE_LAQ_RAL_7016_SATIN = "142",
  PRE_LAQ_RAL_7016_SATIN_FS = "132",

  PRE_LAQ_RAL_6005 = "5",
  PRE_LAQ_RAL_6005_FS = "41",

  PRE_LAQ_RAL_3000 = "4",
  PRE_LAQ_RAL_3000_FS = "44",

  PRE_LAQ_RAL_5010 = "6",
  PRE_LAQ_RAL_5010_FS = "47",

  PRE_LAQ_RAL_9006 = "59",
  PRE_LAQ_RAL_9006_FS = "64",
  PRE_LAQ_RAL_9006_SATIN = "134",
  PRE_LAQ_RAL_9006_SATIN_FS = "131",

  WOODLIKE_NUT = "74",
  WOODLIKE_GOLDEN_OAK = "75",
  WOODLIKE_LIGHT_OAK = "101",
  WOODLIKE_CONCRETE = "139",
  RUSTY = "133",

  RAL_GLOSS_10_FS = "127",
  RAL_GLOSS_25_35_FS = "58",

  MICACEOUS_FS = "112"

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