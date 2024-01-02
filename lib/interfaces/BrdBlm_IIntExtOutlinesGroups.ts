/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_IPoint2D
} from "./BrdBlm_IPoint2D.ts";

/**
 * Gruppi di profili di estrusione accoppiati interno/esterno.
 * Usati ad esempio per i montanti delle sezioni VISA del portone sezionale.
 */
export interface BrdBlm_IIntExtOutlinesGroups {
  int: BrdBlm_IPoint2D[][];
  ext: BrdBlm_IPoint2D[][];
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