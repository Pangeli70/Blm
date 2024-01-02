
import { BrdBlm_TC_SeD_V_eModel } from "../enums/BrdBlm_TC_SeD_V_eModel.ts";
import { BrdBlm_TC_SeD_V_eSlidingSystem } from "../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";
import { BrdBlm_TC_SeD_V_IDoorUrlConfig } from "../interfaces/BrdBlm_TC_SeD_V_IDoorUrlConfig.ts";
import { BrdBlm_TC_SeD_eConfiguration } from "../../enums/BrdBlm_TC_SeD_eConfiguration.ts";
import { BrdBlm_TC_SeD_eDesign } from "../../enums/BrdBlm_TC_SeD_eDesign.ts";
import { BrdBlm_TC_SeD_eFinish } from "../../enums/BrdBlm_TC_SeD_eFinish.ts";
import { BrdBlm_TC_SeD_eFinishVariant } from "../../enums/BrdBlm_TC_SeD_eFinishVariant.ts";
import { BrdBlm_eBrand } from "../../../../enums/BrdBlm_eBrand.ts";

/**
 * Configurazione della porta sezionale di di default usata per testare il
 * passaggio dei dati attraverso la querystring
 */



export const Brd3Dv_TC_SeD_V_DEFAULT_URL_CONFIG: BrdBlm_TC_SeD_V_IDoorUrlConfig = {

  brand: parseInt(BrdBlm_eBrand.BREDA),

  model: parseInt(BrdBlm_TC_SeD_V_eModel.SIRIO),

  sliding: BrdBlm_TC_SeD_V_eSlidingSystem.STO,

  W: 3500,
  H: 2250,
  h: 100,

  configuration: parseInt(BrdBlm_TC_SeD_eConfiguration.BASE),

  finish: parseInt(BrdBlm_TC_SeD_eFinish.PRE_LAQ_C21),
  variant: parseInt(BrdBlm_TC_SeD_eFinishVariant.STUCCO),
  design: parseInt(BrdBlm_TC_SeD_eDesign.FLAT),

  sections: [
    {
      h: 615,
    },
    {
      h: 495,
    },
    {
      h: 495,
    },
    {
      h: 615,
      topCut: 585,
    },
  ],

  hasLoweredThreshold: false,

  hasHandle: true,

  accessories: []
};
