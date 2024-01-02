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
 * Tipi di fori per i pannelli coibentati dei prodotti Breda
 */
export enum BrdBlm_TC_SeD_eInsertHoleType {

  ERROR = "ERROR",

  // Fori per inserti pannelli sezionale (Sezionale, Phenix, Swing, Ibis)
  //-----------------------------------------------------------------
  /** Oblò e griglie di ventilazione */
  SED_525x350 = "hole_Oblo_VentilationGrille_525x350",
  SED_700x370 = "hole_Oblo_700x370",
  SED_609x203 = "hole_Oblo_609x203",
  SED_480x98 = "hole_ventilation_Grille_480x98",

  /** Maniglia Bre06 nelle varie finiture */
  SED_BREDA_HANDLE = "hole_Maniglia_Bre06",
  SED_RECTANGULAR_HANDLE = "hole_Maniglia_Rectangular",
  SED_OVAL_HANDLE = "hole_Maniglia_Oval",

  /** Leva di sblocco Bre06 nelle varie finiture */
  SED_UNBLOCKING_LEVER_BRE06 = "hole_Sblocco_Bre06",
  SED_UNBLOCKING_LEVER_THRU_AXLE = "hole_Sblocco_perno_passante",
  SED_UNBLOCKING_LEVER_BREMET = "hole_Sblocco_Bremet",
  SED_UNBLOCKING_LEVER_NEUTRAL = "hole_Sblocco_Neutra",
  SED_UNBLOCKING_LEVER_PEGASO = "hole_Sblocco_PegasoDoga",
  SED_T_UNBLOCKING_LEVER_BREDA = "hole_Sblocco_Swing_Breda",
  SED_T_UNBLOCKING_LEVER_BREMET = "hole_Sblocco_Swing_Bremet",
  SED_T_UNBLOCKING_LEVER_NEUTRAL = "hole_Sblocco_Swing_Neutra",

  /** Forature Visa */
  SED_VISA_PARAMETRIC = "SED_VISA_PARAM"

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