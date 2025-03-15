/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231113 Spostato nel proprio file nella cartella data/multilang
 * @version 0.3 APG 20231229 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

import { Uts } from "../../../../deps.ts";
import {  BrdBlm_TC_SeD_V_eModel } from "../enums/BrdBlm_TC_SeD_V_eModel.ts";



export type BrdBlm_TC_SeD_V_TModels_MultilangRecordset = Record<
  BrdBlm_TC_SeD_V_eModel,
  Uts.ApgUts_IMultilanguage
>;


export const BrdBlm_TC_SeD_V_Models_MultilangRecordset: BrdBlm_TC_SeD_V_TModels_MultilangRecordset = {

  [BrdBlm_TC_SeD_V_eModel.SIRIO]: {
    EN: "Sirio",
  },
  [BrdBlm_TC_SeD_V_eModel.IRIS]: {
    EN: "Iris",
  },

  [BrdBlm_TC_SeD_V_eModel.PERSUS]: {
    EN: "Persus",
  },
  [BrdBlm_TC_SeD_V_eModel.ATHES]: {
    EN: "Athes",
  },

  [BrdBlm_TC_SeD_V_eModel.CUPIS]: {
    EN: "Cupis",
  },
  [BrdBlm_TC_SeD_V_eModel.VENUS]: {
    EN: "Venus",
  },

  [BrdBlm_TC_SeD_V_eModel.ARES]: {
    EN: "Ares",
  },
  [BrdBlm_TC_SeD_V_eModel.ANTARES]: {
    EN: "Antares",
  },

  [BrdBlm_TC_SeD_V_eModel.ORUS]: {
    EN: "Orus",
  },

  [BrdBlm_TC_SeD_V_eModel.SECURA]: {
    EN: "Secura",
  },

  [BrdBlm_TC_SeD_V_eModel.DOCK]: {
    EN: "Dock",
  },

  [BrdBlm_TC_SeD_V_eModel.CARGO]: {
    EN: "Cargo",
  },

  [BrdBlm_TC_SeD_V_eModel.LUX]: {
    EN: "Lux",
  },
  [BrdBlm_TC_SeD_V_eModel.LUXOR]: {
    EN: "Luxor",
  },
  [BrdBlm_TC_SeD_V_eModel.FULL_VISION]: {
    EN: "Full vision",
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
