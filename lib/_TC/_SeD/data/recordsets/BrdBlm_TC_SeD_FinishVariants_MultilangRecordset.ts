/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */


  import { Uts } from "../../../../deps.ts";
  import { BrdBlm_TC_SeD_eFinishVariant } from "../../enums/BrdBlm_TC_SeD_eFinishVariant.ts";


type BrdBlm_TC_SeD_TFinishVariants_MultilangRecordset = Record<
  BrdBlm_TC_SeD_eFinishVariant,
  Uts.ApgUts_IMultilanguage
>;


export const BrdBlm_TC_SeD_FinishVariants_MultilangRecordset: BrdBlm_TC_SeD_TFinishVariants_MultilangRecordset = {
  
  [BrdBlm_TC_SeD_eFinishVariant.SMOOTH]: {
    IT: "Liscio",
    EN: "Smooth"
  },
  
  [BrdBlm_TC_SeD_eFinishVariant.STUCCO]: {
    EN: "Stucco",
  },
  
  [BrdBlm_TC_SeD_eFinishVariant.WOOD_GRAIN]: {
    EN: "Woodgrain",
  },
  
  [BrdBlm_TC_SeD_eFinishVariant.ULTRA_TOUCH]: {
    EN: "Ultra Touch",
  },
  
  [BrdBlm_TC_SeD_eFinishVariant.MULTIRIB]: {
    EN: "Multirib",
  },
};

/*! ---------------------------------------------------------------------------
 * @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
 * All rights reserved 
 * @licENce You cannot host, display, distribute or share this Work in any 
 * form, both physical and digital. You cannot use this Work in any commercial
 * or non-commercial product, website or project. You cannot sell this Work
 * and you cannot mint an NFTs out of it.
 * --------------------------------------------------------------------------- 
 */