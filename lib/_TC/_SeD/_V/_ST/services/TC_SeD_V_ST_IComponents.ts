import { BrdBlm_TC_SeD_V_ST_RegularCurve } from "../classes/parts/BrdBlm_TC_SeD_V_ST_RegularCurve.ts";
import { BrdBlm_TC_SeD_V_ST_LinearStretch } from "../classes/parts/BrdBlm_TC_SeD_V_ST_LinearStretch.ts";
import { BrdBlm_TC_SeD_eSlidingTrackFinish } from "../../../enums/BrdBlm_TC_SeD_eSlidingTrackFinish.ts";
import { BrdBlm_TC_SeD_V_ST_eUpperCurveType } from "../enums/BrdBlm_TC_SeD_V_ST_eUpperCurveType.ts";

/**
 * Tutti i dati calcolati per definire le dimensioni di tutti i componenti
 * delle guide di scorrimento
 *
 * ATTENZIONE PER ADESSO GESTISCE SOLO LE GUIDE CON SPESSORE 1.5mm
 */


export interface TC_SeD_V_ST_IComponents {


  /**
   * Finitura
   */
  finish: BrdBlm_TC_SeD_eSlidingTrackFinish;

  /**
   * Angolare primo tratto
   */
  angleBarFirstStretch?: BrdBlm_TC_SeD_V_ST_LinearStretch;
  /**
   * Angolare secondo tratto. Per scorrimenti S4, S4R e S3, S3i, S3R con architrave > 1150
   */
  angleBarSecondStretchLength: number;
  angleBarSecondStretch?: BrdBlm_TC_SeD_V_ST_LinearStretch;

  /**
   * Guida verticale primo tratto
   */
  verticalTrackFirstStretchLength: number;
  verticalTrackFirstStretch?: BrdBlm_TC_SeD_V_ST_LinearStretch;
  /**
   * Guida verticale primo tratto inclinazione in radianti
   */
  verticalTrackFirstAngleInRadians: number;


  /**
   * Guida verticale secondo tratto. Per scorrimenti S3, S3i con architrave > 1150
   */
  verticalTrackSecondStretchLength: number;
  verticalTrackSecondStretch?: BrdBlm_TC_SeD_V_ST_LinearStretch;
  /**
   * Guida verticale secondo tratto inclinazione in radianti
   */
  verticalTrackSecondAngleInRadians: number;

  /**
   * Profilo a C orizzontale. Non ha valore per scorrimenti S4, S4R, SO, STO, SMB1, SMB2, SMB3
   */
  horizontalCProfileLength: number;
  horizontalCProfileStretch?: BrdBlm_TC_SeD_V_ST_LinearStretch;

  /**
   * Guida orizzontale inferiore
   */
  lowerHorizontalTrackLength: number;
  horizontalTrackStretch?: BrdBlm_TC_SeD_V_ST_LinearStretch;
  /**
   * Inizio della guida orizzontale inferiore dopo la curva
   */
  lowerHorizontalTrackStart: number;
  /**
   * Guida orizzontale superiore. Solo per scorrimenti a coppia guida orizzontale:
   * es. SR, S1, STO, STO, SMB1, SMB2, SMB3
   */
  upperHorizontalTrackLength: number;
  upperHorizontalTrackStretch?: BrdBlm_TC_SeD_V_ST_LinearStretch;
  /**
   * Inizio della guida orizzontale superiore dopo la curva superiore
   */
  upperHorizontalTrackStart: number;


  /**
   * Curva
   */
  curve?: BrdBlm_TC_SeD_V_ST_RegularCurve;

  /**
   * Tipo di curva superiore per scorrimenti a doppia guida orizzontale
   */
  upperCurveType: BrdBlm_TC_SeD_V_ST_eUpperCurveType;

  /**
   * Misure braccetti per scorrimenti S3, S3i con h > 1150 ed S4
   */
  horizontalCProfileArms: number[];
  horizontalCProfileArmsStretches?: BrdBlm_TC_SeD_V_ST_LinearStretch[];

  /**
   * Dima posteriore in due pezzi o in pezzo singolo
   */
  rearTemplate: number[];
  rearTemplateStretch?: BrdBlm_TC_SeD_V_ST_LinearStretch;


}
