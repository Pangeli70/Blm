/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Definizione della confiturazione del tamponamento per i pannelli del portone sezionale
 * Utile per sezioni vetrate, oblò e griglie
 */
export interface BrdBlm_TC_SeD_ISectionFillingConfig {

  /** Codice di riferimento dell'articolo del tamponamento  Questo codice
   * definisce le caratteristiche del tampinamento
   * TODO - Perché non è una enumerazione?? i tipi di tamponamento sono definiti -- APG 20231108
   */
  code: string;

  /** Coordinata da sinistra */
  x: number;

  /** larghezza del tamponamento */
  w: number;
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
