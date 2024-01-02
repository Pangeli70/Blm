/** ---------------------------------------------------------------------------
 * @module [BrdGlb_TC]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdGlb server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_IPoint2D
} from "../../../interfaces/BrdBlm_IPoint2D.ts";
import {
  BrdBlm_IRectangle
} from "../../../interfaces/BrdBlm_IRectangle.ts";

/**
 * Definizione delle caratteristiche geometriche del contesto per la chiusura
 * tecnica.
 *
 * I params sono i dati verificati e pre processati a partire dalla config
 */
export interface BrdBlm_TC_Ctx_IParams {

  holeWidth: number;
  
  holeHeight: number;
  
  holeLintel: number;
  
  
  holeLintelAdditionalHeight: number;
  
  holeLintelAdditionalDepth: number;
  
  
  rightEmbrasure: number;
  
  leftEmbrasure: number;
  
  
  floorDepth: number;
  
  floorThickness: number;
  
  
  ceilingProfile: BrdBlm_IPoint2D[];
  
  ceilingThickness: number;
  

  rightWallProfile: BrdBlm_IPoint2D[];
  
  leftWallProfile: BrdBlm_IPoint2D[];

  wallThickness: number;


  columns: BrdBlm_IRectangle[];
  
  trasversalBeams: BrdBlm_IRectangle[];
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
