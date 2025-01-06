/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231109 Pulizia e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Nomi delle parti estruse o generate dinamicamente per il contesto
 */
export enum BrdBlm_TC_Ctx_ePartName {

  EXTERN_FACADE = "Context extern facade",
  EXTERN_PAVEMENT = "Context extern pavement",
  EXTERN_THRESHOLD = "Context extern threshold",
  
  EXTERN_LEFT_BASEBOARD = "Context extern left baseboard",
  EXTERN_RIGHT_BASEBOARD = "Context extern right baseboard",
  EXTERN_FRAME = "Context extern frame", // TBI

  EXTERN_LEFT_SIDEWALK = "Context extern left sidewalk", // TBI
  EXTERN_RIGHT_SIDEWALK = "Context extern right sidewalk", // TBI
  EXTERN_FRONT_SIDEWALK = "Context extern front sidewalk", // TBI
  EXTERN_CANOPY = "Context extern canopy", // TBI
  EXTERN_ROOF = "Context extern roof", // TBI

  EXTERN_LEFT_LAMP = "Extern left lamp", // TBI
  EXTERN_RIGHT_LAMP = "Extern right lamp", // TBI

  INTERN_FACADE = "Context intern facade",
  INTERN_LEFT_WALL = "Context intern left wall",
  INTERN_RIGHT_WALL = "Context intern right wall",
  INTERN_BACK_WALL = "Context intern back wall",
  INTERN_LEFT_BASEBOARD = "Context intern left baseboard", // TBI
  INTERN_RIGHT_BASEBOARD = "Context intern baseboard", // TBI
  INTERN_FLOOR = "Context intern floor",
  INTERN_CEILING = "Context intern ceiling",
  INTERN_COLUMN = "Context intern column",// TBI
  INTERN_BEAM = "Context intern beam"// TBI
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
