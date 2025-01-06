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
 * @version 0.1 APG 20240520
 * ----------------------------------------------------------------------------
 */

/**
 * Tipi dei tamponamenti dei prodotti Breda (es. Oblò , griglie o Visa)
 */
export enum BrdBlm_TC_eFillingType {


  // Tamponamenti monoparete acrilico
  SINGLE_GLAZED_PMMA_TRANSP = "SG_PMMA_TRANSP",
  SINGLE_GLAZED_PMMA_OPALINE = "SG_PMMA_OPALINE",
  SINGLE_GLAZED_PMMA_SATIN = "SG_PMMA_SATIN",
  SINGLE_GLAZED_PMMA_BRONZE = "SG_PMMA_BRONZE",
  SINGLE_GLAZED_PMMA_DARK = "SG_PMMA_DARK",

  // Tamponamenti vetrocamera acriloco da 16 mm
  DOUBLE_GLAZED_PMMA_TRANSP_16 = "DG_PMMA_TRANSP_16",
  DOUBLE_GLAZED_PMMA_OPALINE_16 = "DG_PMMA_OPALINE_16",
  DOUBLE_GLAZED_PMMA_SATIN_16 = "DG_PMMA_SATIN_16",
  DOUBLE_GLAZED_PMMA_BRONZE_16 = "DG_PMMA_BRONZE_16",
  DOUBLE_GLAZED_PMMA_DARK_16 = "DG_PMMA_DARK_16",

  // Tamponamenti vetrocamera acrilico da 30 mm
  DOUBLE_GLAZED_PMMA_TRANSP_30 = "DG_PMMA_TRANSP_30",
  DOUBLE_GLAZED_PMMA_OPALINE_30 = "DG_PMMA_OPALINE_30",
  DOUBLE_GLAZED_PMMA_SATIN_30 = "DG_PMMA_SATIN_30",
  DOUBLE_GLAZED_PMMA_BRONZE_30 = "DG_PMMA_BRONZE_30",
  DOUBLE_GLAZED_PMMA_DARK_30 = "DG_PMMA_DARK_30",

  // Tamponamenti griglie lamiera stirata SQ20
  STRETCHED_SHEETMETAL_GRILLE_SQ20_GALV = "SSMG_SQ20_GALV",
  STRETCHED_SHEETMETAL_GRILLE_SQ20_WHITE = "SSMG_SQ20_WHITE",
  STRETCHED_SHEETMETAL_GRILLE_SQ20_BLACK = "SSMG_SQ20_BLACK",
  STRETCHED_SHEETMETAL_GRILLE_SQ20_RAL = "SSMG_SQ20_RAL",

  // Tamponamenti griglie lamiera stirata ST 7.3
  STRETCHED_SHEETMETAL_GRILLE_ST7_3_GALV = "SSMG_ST7_3_GALV",
  STRETCHED_SHEETMETAL_GRILLE_ST7_3_WHITE = "SSMG_ST7_3_WHITE",
  STRETCHED_SHEETMETAL_GRILLE_ST7_3_BLACK = "SSMG_ST7_3_BLACK",
  STRETCHED_SHEETMETAL_GRILLE_ST7_3_RAL = "SSMG_ST7_3_RAL",

  // Tamponamenti griglie alettate da 30 mm
  FINNED_GRILLE_C21 = "FG_C21",
  FINNED_GRILLE_C17 = "FG_C17",
  FINNED_GRILLE_C81 = "FG_C81",
  FINNED_GRILLE_RAL3000 = "FG_RAL3000",
  FINNED_GRILLE_RAL5010 = "FG_RAL5010",
  FINNED_GRILLE_RAL6005 = "FG_RAL6005",
  FINNED_GRILLE_RAL7016 = "FG_RAL7016",
  FINNED_GRILLE_RAL9006 = "FG_RAL9006",

  FINNED_GRILLE_SIMILARWOOD_NUT = "FG_NUT",
  FINNED_GRILLE_SIMILARWOOD_GOLDENOAK = "FG_GOLDENOAK",
  FINNED_GRILLE_SIMILARWOOD_LIGHTOAK = "FG_LIGHTOAK",

  FINNED_GRILLE_SCOTCHBRITE_SILVER = "FG_SB_SILVER",
  FINNED_GRILLE_SCOTCHBRITE_BLACK = "FG_SB_BLACK",

  FINNED_GRILLE_RAL = "FG_RAL",



}
