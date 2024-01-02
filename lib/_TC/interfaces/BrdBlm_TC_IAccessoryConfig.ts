/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Definizione della configurazione degli accessori per le chiusure tecniche
 */
export interface BrdBlm_TC_IAccessoryConfig {
  /** Codice articolo accessorio */
  code: string;
  /** Dimensionale 1 */
  dim1?: string;
  /** Dimensionale 2 */
  dim2?: string;
  /** Dimensionale 3 */
  dim3?: string;
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
