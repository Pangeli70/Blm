import { BrdBlm_TC_SeD_eFillingType } from "../../enums/BrdBlm_TC_SeD_eFillingType.ts";
import { BrdBlm_TC_SeD_eInsertFrameColor } from "../../enums/BrdBlm_TC_SeD_eInsertFrameColor.ts";
import { BrdBlm_TC_SeD_eInsertHoleType } from "../../enums/BrdBlm_TC_SeD_eInsertHoleType.ts";
import { BrdBlm_TC_eFillingColor } from "../../../enums/BrdBlm_TC_eFillingColor.ts";
import { BrdBlm_TC_SeD_IInsert } from "../../interfaces/BrdBlm_TC_SeD_IInsert.ts";

/**
 * Tabella di correlazione tra gli inserti delle sezioni
 * e gli articoli nell'anagrafica compresi tutti i dati annessi
 */


export const BrdBlm_TC_SeD_Inserts_Table: BrdBlm_TC_SeD_IInsert[] = [
  //Oblo 525x350 con vetrocamera trasparente
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_525x350,
    fillingType: BrdBlm_TC_SeD_eFillingType.DOUBLE_GLAZED_TRANSP_TRANSP_16,
    articles: [
      {
        code: "1542411A",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411C",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.RAL,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0005",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0006",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0004",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "154240CC0001",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
      },
    ],
  },
  //Oblo 525x350 con vetrocamera opalino
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_525x350,
    fillingType: BrdBlm_TC_SeD_eFillingType.DOUBLE_GLAZED_TRANSP_OPAL_16,
    articles: [
      {
        code: "1542411A0001",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411C0001",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0010",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.RAL,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0015",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0016",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0014",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
    ],
  },
  //Oblo 525x350 con vetrocamera trasparente/fume
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_525x350,
    fillingType: BrdBlm_TC_SeD_eFillingType.DOUBLE_GLAZED_TRANSP_SMOKE_16,
    articles: [
      {
        code: "1542411W0025",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0026",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0024",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.RAL,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
    ],
  },
  //Oblo 525x350 con vetrocamera fume/fume
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_525x350,
    fillingType: BrdBlm_TC_SeD_eFillingType.DOUBLE_GLAZED_SMOKE_SMOKE_16,
    articles: [
      {
        code: "1542411W0035",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0036",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1542411W0034",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.RAL,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
    ],
  },
  //Oblo 700x370 con vetrocamera trasparente
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_700x370,
    fillingType: BrdBlm_TC_SeD_eFillingType.DOUBLE_GLAZED_TRANSP_TRANSP_16,
    articles: [
      {
        code: "1542511C",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
    ],
  },
  //Oblo 700x370 con vetrocamera opalino
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_700x370,
    fillingType: BrdBlm_TC_SeD_eFillingType.DOUBLE_GLAZED_TRANSP_OPAL_16,
    articles: [
      {
        code: "1542511C0001",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
    ],
  },
  //Griglia di ventilazione 480x98
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_480x98,
    fillingType: BrdBlm_TC_SeD_eFillingType.NONE,
    articles: [
      {
        code: "1511901A",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1511901C",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
      },
    ],
  },
  //Griglia di ventilazione 525x350
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_525x350,
    fillingType: BrdBlm_TC_SeD_eFillingType.STEEL_GRILLE_ST73,
    articles: [
      {
        code: "1511010A1001",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1511010C1001",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1511010W1001",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.RAL,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1511010W0114",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1511010W0115",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1511010W0116",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
    ],
  },
  //Maniglia di sollevamento
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_BREDA_HANDLE,
    fillingType: BrdBlm_TC_SeD_eFillingType.NONE,
    articles: [
      {
        code: "153200100001",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.BLACK,
      },
      {
        code: "1532001W0004",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1532001W0005",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
      {
        code: "1532001W0006",
        extColor: BrdBlm_TC_SeD_eInsertFrameColor.BY_CODE,
        intColor: BrdBlm_TC_SeD_eInsertFrameColor.C21,
      },
    ],
  },
  /**
   * SEZIONI VISA
   */
  //Vetrocamera sp 30
  {
    holeType: BrdBlm_TC_SeD_eInsertHoleType.SED_VISA_PARAMETRIC,
    fillingType: BrdBlm_TC_SeD_eFillingType.DOUBLE_GLAZED_TRANSP_SATIN_30,
    articles: [
      {
        code: "158500400006",
        extColor: BrdBlm_TC_eFillingColor.TRANSPARENT,
        intColor: BrdBlm_TC_eFillingColor.SATIN,
      },
    ]
  }
];
