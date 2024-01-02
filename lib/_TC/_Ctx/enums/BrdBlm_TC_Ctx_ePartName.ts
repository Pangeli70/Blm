/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231109 Pulizia e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Nomi delle parti estruse o generate dinamicamente per il contesto
 */
export enum BrdBlm_TC_Ctx_ePartName {

  EXTERN_FACADE = "Context_Extern_Facade",
  EXTERN_PAVEMENT = "Context_Extern_Pavement",
  EXTERN_THRESHOLD = "Context_Extern_Threshold",
  EXTERN_BASEBOARDS = "Context_Extern_Baseboards",

  EXTERN_SIDEWALKS = "Context_Extern_Sidewalks*",
  EXTERN_CANOPY = "Context_Extern_Canopy*",
  EXTERN_ROOF = "Context_Extern_Roof*",
  EXTERN_FRAME = "Context_Extern_Frame*",

  INTERN_LEFT_WALL = "Context_Intern_LeftWall",
  INTERN_RIGHT_WALL = "Context_Intern_RightWall",
  INTERN_FLOOR = "Context_Intern_Floor",
  INTERN_CEILING = "Context_Intern_Ceiling"
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
