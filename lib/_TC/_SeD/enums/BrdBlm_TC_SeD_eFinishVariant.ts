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
 * Tipi di variante finitura (superfice/goffratura) dei pannelli dei portoni 
 * sezionali come da colonna ID della tabella:
 * [Tabelle configurazioni porte]->[Finiture]->[Varianti finitura]
 */
export enum BrdBlm_TC_SeD_eFinishVariant {

  NONE = "49",
  SMOOTH = "174",
  STUCCO = "50",
  WOOD_GRAIN = "49",
  ULTRA_TOUCH = "123",
  MULTIRIB = "9999"

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
