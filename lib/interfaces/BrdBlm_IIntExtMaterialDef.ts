/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdGlb server side
 * @version 0.4 APG 20240225 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_IMaterialDef
} from "./BrdBlm_IMaterialDef.ts";

/**
 * Definizioni dei Materiali per le mesh estruse accoppiate interno/esterno
 * Usati ad esempio per i pannelli schiumati del portone sezionale.
 */
export interface BrdBlm_IIntExtMaterialDef {
  int: BrdBlm_IMaterialDef;
  ext: BrdBlm_IMaterialDef;
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
