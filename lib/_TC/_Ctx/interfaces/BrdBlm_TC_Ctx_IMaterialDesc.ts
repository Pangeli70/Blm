/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231109 Pulizia e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_eGlossRoughness
} from "../../../enums/BrdBlm_eGlossRoughness.ts";

/**
 * Definizione del materiale del contesto:
 * TODO - Is it possible to merge or use IBrd3DvSectionMaterial + IBrd3DvSectionSurface?
 * -- APG 20230829
 */
export interface BrdBlm_TC_Ctx_IMaterialDesc {
  map: string;
  u: number;
  v: number;
  bumpMap: string;
  bumpU: number;
  bumpV: number;
  bumpHeight: number;
  roughness: BrdBlm_eGlossRoughness;
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