/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Definizione della configurazione dei fori per i pannelli del portone sezionale
 * Utile per oblò, griglie, maniglie, sblocchi ecc.
 */
export interface BrdBlm_TC_SeD_ISectionHoleConfig {
  /** Codice di riferimento dell'articolo del tipo di foro sul pannello. Questo codice
   * definisce le dimensioni e la sagoma del foro
   * TODO - Perché non è una enumerazione?? i tipi di fori sono definiti -- APG 20231108
   */
  code: string;
  /** Coordinata a sinistra dell'inizio del foro */
  x: number;
  /** Coordinata in basso dell'inizio del foro */
  y: number;
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