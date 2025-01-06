/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_SeD_V_ST_VerticalLift
} from "./BrdBlm_TC_SeD_V_ST_VerticalLift.ts";

/**
 * Classe base per guide di scorrimento dei portoni sezionali a scorrimento
 * semi verticale del tipo S3, S3i, S3R, S3S
 */
export class BrdBlm_TC_SeD_V_ST_HighLift extends BrdBlm_TC_SeD_V_ST_VerticalLift {


  /**
   * Profilo a C orizzontale
   */
  protected getHorizontalCProfileStretch() {
    this.notImplemented(this.getHorizontalCProfileStretch.name);
  };


  /**
   * Guida orizzontale
   */
  protected getHorizontalTrackStretch() {
    this.notImplemented(this.getHorizontalTrackStretch.name);
  };



  getComponents() {

    super.getComponents();

    this.getHorizontalCProfileStretch();
    this.getHorizontalTrackStretch();

    return this.profiledParts;

  };


}
