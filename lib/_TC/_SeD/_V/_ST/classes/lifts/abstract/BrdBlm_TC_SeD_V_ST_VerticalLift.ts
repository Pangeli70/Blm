/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_SeD_V_ST_RULES
} from "../../../consts/BrdBlm_TC_SeD_V_ST_RULES.ts";
import {
  BrdBlm_TC_SeD_V_eSlidingSystem
} from "../../../../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";
import {
  BrdBlm_TC_SeD_V_ST_GenericLift
} from "./BrdBlm_TC_SeD_V_ST_GenericLift.ts";

/**
 * Classe base per guide di scorrimento dei portoni sezionali a scorrimento
 * verticale del tipo S4, S4R, S4S
 */



export class BrdBlm_TC_SeD_V_ST_VerticalLift extends BrdBlm_TC_SeD_V_ST_GenericLift {

  /**
   * Calcola l'inclinazione delle guide verticali secondo tratto
   */
  protected getVerticalTrackSecondStretchAngleInRadians(
    atype: BrdBlm_TC_SeD_V_eSlidingSystem,
    alength: number
  ) {

    let r = 0;
    switch (atype) {
      case BrdBlm_TC_SeD_V_eSlidingSystem.S3R:
      case BrdBlm_TC_SeD_V_eSlidingSystem.S4R: {
        {
          const deltaAperture = BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_UPPER_APERTURE -
            BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_UPPER_APERTURE_REDUCED;
          const sin = deltaAperture / alength;
          r = this.RAD_90 - Math.asin(sin);
          break;
        }
      }
      default: {
        r = BrdBlm_TC_SeD_V_ST_RULES.SECOND_VERTICAL_TRACK_S3_S4_ANGLE * this._TO_RAD;
        break;
      }
    }


    return r;
  }



  /**
   * Angolare secondo tratto
   */
  protected getAngleBarSecondStretch() {
    this.notImplemented(this.getAngleBarSecondStretch.name);
  };



  /**
   * Guida verticale secondo tratto
   */
  protected getVerticalTrackSecondStretch() {
    this.notImplemented(this.getVerticalTrackSecondStretch.name);
  };



  /**
   * Braccetti a "C" per guida verticale secondo tratto
   */
  protected getHorizontalCProfileArmsStretches() {
    this.notImplemented(this.getHorizontalCProfileArmsStretches.name);
  };



  getComponents() {

    this.getAngleBarFirstStretch();
    this.getVerticalTrackFirstStretch();
    this.getRearTemplateStretch();

    this.getAngleBarSecondStretch();
    this.getVerticalTrackSecondStretch();
    this.getHorizontalCProfileArmsStretches();

    return this.profiledParts;

  };


}
