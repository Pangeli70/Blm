/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240309
 * ----------------------------------------------------------------------------
 */

import {
  THREE
} from "../../../Glb/lib/deps.ts";
import {
  BrdBlm_ITextureDef
} from "./BrdBlm_ITextureDef.ts";

/**
 * Definizione dei dati di mappatura delle NORMAL MAPS.
 */
export interface BrdBlm_INormalMapDef extends BrdBlm_ITextureDef {


  isNormalMap: true;

  /**
   * Scala di profondità della normal map
   */
  normalScale: THREE.Vector2

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
