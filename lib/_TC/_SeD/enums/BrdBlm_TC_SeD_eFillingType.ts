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
 * Tipi di tamponamenti per gli inserti delle sezioni
 */
export enum BrdBlm_TC_SeD_eFillingType {

  NONE = "",

  // OBLO E GRIGLIE DI VENTILAZIONE
  //----------------------------------------------------------------------------
  /** Tamponamento vetrocamera per Oblò */
  DOUBLE_GLAZED_TRANSP_TRANSP_16 = "oblo_opal_16",
  DOUBLE_GLAZED_TRANSP_OPAL_16 = "oblo_opal_16",
  DOUBLE_GLAZED_TRANSP_SMOKE_16 = "oblo_trasp_fume_16",
  DOUBLE_GLAZED_SMOKE_SMOKE_16 = "oblo_fume_fume_16",

  /** Tamponamento vetrocamera per Oblò FROST*/
  DOUBLE_GLAZED_FROST_68 = "oblo_trasp_frost68",
  DOUBLE_GLAZED_FROST_83 = "oblo_trasp_frost83",

  /** Tamponamento lamiera stirata griglia */
  VENTILATION_GRILLE_C21 = "oblo_ventilation_grille_1,5_bianca",
  VENTILATION_GRILLE_BLACK = "oblo_ventilation_grille_1,5_nera",


  // SEZIONI VISA
  //---------------------------------------------------------------------------
  /** Tamponamenti vetrocamera sp30 */
  DOUBLE_GLAZED_TRANSP_TRANSP_30 = "visa_trasp_30",
  DOUBLE_GLAZED_TRANSP_SATIN_30 = "visa_trasp/satin_30",
  DOUBLE_GLAZED_TRANSP_SMOKE_30 = "visa_trasp/fume_30",
  DOUBLE_GLAZED_SMOKE_SMOKE_30 = "visa_fume/fume_30",

  /** Tamponamenti mono parete */
  GLAZED_TRANSP_4 = "visa_trasp_4",

  /** Tamponamenti ciechi */
  ALUMINIUM_PANEL_30 = "visa_alu_30",

  /** Tamponamenti in griglia */
  STEEL_GRILLE_50x50x4 = "visa_griglia_50x50x4",
  STEEL_GRILLE_SQ20 = "visa_lam_stir_SQ20",
  STEEL_GRILLE_ST73 = "visa_lam_stir_ST7,3",
  ALUM_GRILLE_FINNED = "visa_griglia_alettata"
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