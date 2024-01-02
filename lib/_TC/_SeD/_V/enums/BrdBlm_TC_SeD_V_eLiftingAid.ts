/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20220620
 * @version 0.2 APG 20230622
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Tipi di ausili alla movimentazione del portone sezionale a scorrimento verticale
 */
export enum BrdBlm_TC_SeD_V_eLiftingAid {

  /**
   * Nessuno: Portone sezionale verticale manuale
   */
  MAN = "MAN",
  /**
   * Verricello a catena
   */
  VERR = "VERR", 
  /**
   * Predisposizione per la motorizzazione a presa diretta
   */
  PRED = "PRED",

  /**
   * Motore a traino Sommer fino a 15m2
   */
  SLB550 = "SLB550", //
  /**
   * Motore a traino Sommer fino a 20m2
   */
  SLB650 = "SLB650", //
  /**
   * Motore a traino Sommer sulla guida laterale fino a 20m2
   */
  SLB650L = "SLB650L", //
  /**
   * Motore a traino Sommer fino a 25m2
   */
  SLB800 = "SLB800", //
  /**
   * Motore a traino Sommer sulla guida laterale fino a 25m2
   */
  SLB800L = "SLB800L", //
  /**
   * Motore a traino Sommer fino a 30m2
   */
  SLB1100 = "SLB1100",


  /**
   * Motore a traino Nice fino a 15m2
   */
  SPY550 = "SPY550",
  /**
   * Motore a traino Nice fino a 20m2
   */
  SPY650 = "SPY650",
  /**
   * Motore a traino Nice fino a 25m2
   */
  SPY800 = "SPY800",


  /**
   * Motore a traino Life fino a 20m2
   */
  PRO650 = "PRO650",

  
  /**
   * Motore a presa diretta Nice fino a 20m2
   */
  SOON = "SOON",


  /**
   * Motore monofase a presa diretta MFZ fino a 20m2
   */
  STA1 = "STA1",
  /**
   * Motore monofase a presa diretta MFZ con inverter fino a 20m2
   */
  STA1FU = "STA1FU",
  /**
   * Motore trifase a presa diretta MFZ 15 RPM fino a 20m2
   */
  STA315 = "STA315",
  /**
   * Motore trifase a presa diretta MFZ 24 RPM fino a 20m2
   */
  STA324 = "STA324",
  /**
   * Motore trifase a presa diretta MFZ senza quadro fino a 20m2
   */
  STAC3 = "STAC3",


  /**
   * Motore monofase a presa diretta Nice 700N fino a 20m2
   */
  NDC1 = "NDC1",

  /**
   * Motore trifase a presa diretta Nice 1100N fino a 20m2
   */
  NDC3 = "NDC3",
}
