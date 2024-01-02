/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_IPoint2D
} from "../../interfaces/BrdBlm_IPoint2D.ts";

/**
 * Dati dell'inserto nel manto della Chiusura Tecnica
 */
export interface BrdBlm_TC_IInsertParams {

  /**
   * Codice articolo dell'inserto.
   * Verrà utilizzato anche per identificare le caratteristiche del foro,
   * i materiali ecc.
   */
  code: string;

  /**
   * Coordinate di posizionamento dell'inserto nel manto della chiusura tecnica
   */
  position: BrdBlm_IPoint2D;

  /**
   * Profilo di foratura dell'inserto.
   * TODO Questo dovrebbe essere standardizzato e copiato da una libreria
   * dei fori per gli inserti
   */
  holeProfile: BrdBlm_IPoint2D[];
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
