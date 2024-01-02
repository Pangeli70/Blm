
import { BrdBlm_TC_SeD_V_eModel } from "../enums/BrdBlm_TC_SeD_V_eModel.ts";
import { BrdBlm_TC_SeD_V_eSlidingSystem } from "../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";
import { BrdBlm_TC_SeD_V_IDoorConfig } from "../interfaces/BrdBlm_TC_SeD_V_IDoorConfig.ts";
import { BrdBlm_TC_SeD_eConfiguration } from "../../enums/BrdBlm_TC_SeD_eConfiguration.ts";
import { BrdBlm_TC_SeD_eDesign } from "../../enums/BrdBlm_TC_SeD_eDesign.ts";
import { BrdBlm_TC_SeD_eFinish } from "../../enums/BrdBlm_TC_SeD_eFinish.ts";
import { BrdBlm_TC_SeD_eFinishVariant } from "../../enums/BrdBlm_TC_SeD_eFinishVariant.ts";
import { BrdBlm_TC_SeD_eSectionFamily } from "../../enums/BrdBlm_TC_SeD_eSectionFamily.ts";
import { BrdBlm_TC_SeD_eVisaType } from "../../enums/BrdBlm_TC_SeD_eVisaType.ts";
import { BrdBlm_eBrand } from "../../../../enums/BrdBlm_eBrand.ts";

/**
 * Configurazione della porta sezionale di default da usare come test di base
 */



export const BrdBlm_TC_SeD_V_DEFAULT_CONFIG: BrdBlm_TC_SeD_V_IDoorConfig = {

  brand: BrdBlm_eBrand.BREDA,

  model: BrdBlm_TC_SeD_V_eModel.SIRIO,

  sliding: BrdBlm_TC_SeD_V_eSlidingSystem.SD,

  W: 3500,

  H: 2250,

  h: 150,

  a: 0,

  configuration: BrdBlm_TC_SeD_eConfiguration.BASE,
  visaType: BrdBlm_TC_SeD_eVisaType.NONE,

  finish: BrdBlm_TC_SeD_eFinish.PRE_LAQ_C21,
  variant: BrdBlm_TC_SeD_eFinishVariant.STUCCO,
  design: BrdBlm_TC_SeD_eDesign.MULTI,

  extColor: "",
  intColor: "",


  // sezioni del portone
  sections: [
    {
      family: BrdBlm_TC_SeD_eSectionFamily.FOAMED,
      h: 615,
    },
    {
      family: BrdBlm_TC_SeD_eSectionFamily.FOAMED,
      h: 495,
    },
    {
      family: BrdBlm_TC_SeD_eSectionFamily.FOAMED,
      h: 495,
    },
    {
      family: BrdBlm_TC_SeD_eSectionFamily.FOAMED,
      h: 615,
      topCut: 585,
    },
  ],


  hasLoweredThreshold: false,

  hasHandle: true,

  accessories: [],
};
