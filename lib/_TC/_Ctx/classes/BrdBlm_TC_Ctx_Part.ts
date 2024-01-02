/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_Extrudable
} from "../../../classes/BrdBlm_Extrudable.ts";
import {
  BrdBlm_IPoint2D
} from "../../../interfaces/BrdBlm_IPoint2D.ts";
import {
  BrdBlm_TC_Ctx_ePartName
} from "../enums/BrdBlm_TC_Ctx_ePartName.ts";

/**
 * Parte estrudibile e posizionabile per la creazione del contesto
 */
export class BrdBlm_TC_Ctx_Part extends BrdBlm_Extrudable {

  name: BrdBlm_TC_Ctx_ePartName;

  profile: BrdBlm_IPoint2D[] = [];

  constructor(aname: BrdBlm_TC_Ctx_ePartName) {
    super();
    this.name = aname;
  }

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
