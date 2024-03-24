/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240323
 * ----------------------------------------------------------------------------
 */

import { BrdBlm_ITextureDef } from "./BrdBlm_ITextureDef.ts";

/**
 * Definizione dei dati di mappatura delle mappe di trasparenza.
 */
export interface BrdBlm_IAlphaMapDef extends BrdBlm_ITextureDef {


  isAlphaMap: true;

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
