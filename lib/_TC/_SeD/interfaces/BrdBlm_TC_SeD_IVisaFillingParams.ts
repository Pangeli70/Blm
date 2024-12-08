/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  ApgA3D_IPoint2D
} from "../../../../../A3D/lib/interfaces/ApgA3D_IPoint2D.ts";

/**
 * Dati del tamponamento nella sezione VISA per le chiusure tecniche
 */
export interface BrdBlm_TC_SeD_IVisaFillingParams {

  /**
   * Codice articolo identifica le caratteristiche del tamponamento: colori
   * spessori, ecc.
   */
  code: string;

  /**
   * Coordinate di posizionamento del tamponamento
   */
  positions: ApgA3D_IPoint2D;

  /**
   * Dimensioni del tamponamento x=larghezza e y=altezza
   */
  dimensions: ApgA3D_IPoint2D;
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
