/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */
import {
  BrdBlm_TC_SeD_V_eModel
} from "../enums/BrdBlm_TC_SeD_V_eModel.ts";
import {
  BrdBlm_IMultilanguage
} from "../../../../interfaces/BrdBlm_IMultilanguage.ts";


export type BrdBlm_TC_SeD_V_TModels_MultilangRecordset = Record<
  BrdBlm_TC_SeD_V_eModel,
  BrdBlm_IMultilanguage
>;


export const BrdBlm_TC_SeD_V_Models_MultilangRecordset: BrdBlm_TC_SeD_V_TModels_MultilangRecordset = {

  [BrdBlm_TC_SeD_V_eModel.SIRIO]: {
    it: "Sirio",
  },
  [BrdBlm_TC_SeD_V_eModel.IRIS]: {
    it: "Iris",
  },

  [BrdBlm_TC_SeD_V_eModel.PERSUS]: {
    it: "Persus",
  },
  [BrdBlm_TC_SeD_V_eModel.ATHES]: {
    it: "Athes",
  },

  [BrdBlm_TC_SeD_V_eModel.CUPIS]: {
    it: "Cupis",
  },
  [BrdBlm_TC_SeD_V_eModel.VENUS]: {
    it: "Venus",
  },

  [BrdBlm_TC_SeD_V_eModel.ARES]: {
    it: "Ares",
  },
  [BrdBlm_TC_SeD_V_eModel.ANTARES]: {
    it: "Antares",
  },

  [BrdBlm_TC_SeD_V_eModel.ORUS]: {
    it: "Orus",
  },

  [BrdBlm_TC_SeD_V_eModel.SECURA]: {
    it: "Secura",
  },

  [BrdBlm_TC_SeD_V_eModel.DOCK]: {
    it: "Dock",
  },

  [BrdBlm_TC_SeD_V_eModel.CARGO]: {
    it: "Cargo",
  },

  [BrdBlm_TC_SeD_V_eModel.LUX]: {
    it: "Lux",
  },
  [BrdBlm_TC_SeD_V_eModel.LUXOR]: {
    it: "Luxor",
  },
  [BrdBlm_TC_SeD_V_eModel.FULL_VISION]: {
    it: "Full vision",
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
