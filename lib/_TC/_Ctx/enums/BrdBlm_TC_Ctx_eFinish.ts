/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231109 Pulizia e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Tipi di finiture predefinite per il contesto
 */
// TODO Implement this! -- APG 20230728
export enum BrdBlm_TC_Ctx_eFinish {
  EXT_WALL_A = "EWA",
  EXT_WALL_B = "EWB",
  EXT_WALL_C = "EWC",
  EXT_WALL_D = "EWD",
  INT_WALL_A = "IWA",
  INT_WALL_B = "IWB",
  CEILING_A = "CEA",
  CEILING_B = "CEB",
  INT_FLOOR_A = "IFA",
  INT_FLOOR_B = "IFB",
  INT_FLOOR_C = "IFC",
  INT_FLOOR_D = "IFD",
  EXT_PAVEMENT_A = "EFA",
  EXT_PAVEMENT_B = "EFB",
  EXT_PAVEMENT_C = "EFC",
  EXT_PAVEMENT_D = "EFD"
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