/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20231108
 * @version 0.2 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Famiglie di tipologie di sezioni per i portoni sezionali
 */
export enum BrdBlm_TC_SeD_eSectionFamily {

  /**
   * Non definita
   */
  UNDEFINED = "0",

  /**
   * Pannello in lamiera sandwich di poliureano espanso
   */
  FOAMED = "1",

  /**
   * Struttura di alluminio con tamponamenti
   */
  VISA = "2",

  /**
   * Pannello in legno
   */
  WOOD = "3",

  /**
   * Struttura di alluminio con rivestimento esterno
   */
  PEGASO = "4"
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