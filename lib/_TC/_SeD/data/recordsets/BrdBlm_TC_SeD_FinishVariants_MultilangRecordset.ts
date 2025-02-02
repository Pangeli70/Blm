/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_SeD_eFinishVariant } from "../../enums/BrdBlm_TC_SeD_eFinishVariant.ts";
import {
  BrdBlm_IMultilanguage } from "../../../../interfaces/BrdBlm_IMultilanguage.ts";


type BrdBlm_TC_SeD_TFinishVariants_MultilangRecordset = Record<
  BrdBlm_TC_SeD_eFinishVariant,
  BrdBlm_IMultilanguage
>;


export const BrdBlm_TC_SeD_FinishVariants_MultilangRecordset: BrdBlm_TC_SeD_TFinishVariants_MultilangRecordset = {
  
  [BrdBlm_TC_SeD_eFinishVariant.SMOOTH]: {
    it: "Liscio",
    en: "Smooth"
  },
  
  [BrdBlm_TC_SeD_eFinishVariant.STUCCO]: {
    it: "Stucco",
  },
  
  [BrdBlm_TC_SeD_eFinishVariant.WOOD_GRAIN]: {
    it: "Woodgrain",
  },
  
  [BrdBlm_TC_SeD_eFinishVariant.ULTRA_TOUCH]: {
    it: "Ultra Touch",
  },
  
  [BrdBlm_TC_SeD_eFinishVariant.MULTIRIB]: {
    it: "Multirib",
  },
};

/*! ---------------------------------------------------------------------------
 * @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
 * All rights reserved 
 * @licence You cannot host, display, distribute or share this Work in any 
 * form, both physical and digital. You cannot use this Work in any commercial
 * or non-commercial product, website or project. You cannot sell this Work
 * and you cannot mint an NFTs out of it.
 * --------------------------------------------------------------------------- 
 */