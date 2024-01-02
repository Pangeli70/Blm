import { BrdBlm_TC_SeD_eInsertHoleType } from "../../enums/BrdBlm_TC_SeD_eInsertHoleType.ts";
import { BrdBlm_TC_SeD_IInsertHole } from "../../interfaces/BrdBlm_TC_SeD_IInsertHole.ts";



/**
 * Tabella di defizione delle geometrie dei fori per gli inserti delle sezioni
 */
export const BrdBlm_TC_SeD_InsertHoleDimensions_Table: BrdBlm_TC_SeD_IInsertHole[] = [
  {
    type: BrdBlm_TC_SeD_eInsertHoleType.SED_525x350,
    w: 505,
    h: 330,
  },
  {
    type: BrdBlm_TC_SeD_eInsertHoleType.SED_700x370,
    w: 680,
    h: 350
  },
  {
    type: BrdBlm_TC_SeD_eInsertHoleType.SED_609x203,
    w: 588,
    h: 175,
  },
  {
    type: BrdBlm_TC_SeD_eInsertHoleType.SED_480x98,
    w: 450,
    h: 80,
  },
  {
    type: BrdBlm_TC_SeD_eInsertHoleType.SED_BREDA_HANDLE,
    w: 90,
    h: 43,
  },
  {
    type: BrdBlm_TC_SeD_eInsertHoleType.SED_VISA_PARAMETRIC,
    w: 0,
    h: 0,
  },
  // {
  //   type: Brd_eInsertHoleType.RECTANGULAR_HANDLE,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
  // {
  //   type: Brd_eInsertHoleType.OVAL_HANDLE,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
  // /** Leva di sblocco Bre06 nelle varie finiture */
  // {
  //   type: Brd_eInsertHoleType.BREDA_UNBLOCKING_LEVER_BRE06,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
  // {
  //   type: Brd_eInsertHoleType.UNBLOCKING_LEVER_THRU_AXLE,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
  // {
  //   type: Brd_eInsertHoleType.BREMET_UNBLOCKING_LEVER,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
  // {
  //   type: Brd_eInsertHoleType.NEUTRA_UNBLOCKING_LEVER,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
  // {
  //   type: Brd_eInsertHoleType.PEGASO_UNBLOCKING_LEVER,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
  // {
  //   type: Brd_eInsertHoleType.BREDA_SWING_UNBLOCKING_LEVER,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
  // {
  //   type: Brd_eInsertHoleType.BREMET_SWING_UNBLOCKING_LEVER,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
  // {
  //   type: Brd_eInsertHoleType.NEUTRA_SWING_UNBLOCKING_LEVER,
  //   w: 0, //TODO definire valori
  //   h: 0,
  //   deltaW: 0,
  //   deltaH: 0,
  // },
];
