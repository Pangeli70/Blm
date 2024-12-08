/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20231108
 * @version 0.2 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */


import {
  ApgA3D_IPoint2D
} from "../../../../../A3D/lib/interfaces/ApgA3D_IPoint2D.ts";
import {
  BrdBlm_TC_SeD_eSlidingTracksOutlineType
} from "../enums/BrdBlm_TC_SeD_eSlidingTracksOutlineType.ts";
import {
  BrdBlm_TC_SeD_TSlidingTracksOutlines_Recordset
} from "../types/BrdBlm_TC_SeD_TSlidingTracksOutlines_Recordset.ts";


/**
 * Gestore dei profili usati per i Profilati di lamiera che costituiscono le
 * guide di scorrimento dei portoni sezionali
 */
export class BrdBlm_TC_SeD_SlidingTracksOutlines_Service {

  private static _outlines: BrdBlm_TC_SeD_TSlidingTracksOutlines_Recordset | null = null;
  private static _isInited = false;

  static #init() {

    if(this._isInited) return;


    const angleBarPoints: ApgA3D_IPoint2D[] = [
      { x: 0, y: -3 },
      { x: 15, y: -3 },
      { x: 25, y: 0 },
      { x: 61.5, y: 0 },
      { x: 61.5, y: -100 },
      { x: 60, y: -100 },
      { x: 60, y: -1.5 },
      { x: 26, y: -1.5 },
      { x: 15, y: -4.5 },
      { x: 15, y: -12 },
      { x: 0, y: -12 },
    ];


    const trackPoints: ApgA3D_IPoint2D[] = [
      { x: 0, y: 0 },
      { x: 0, y: -25 },
      { x: -2, y: -55 },
      { x: -20, y: -54 },
      { x: -25, y: -40 },
      { x: -23.5, y: -40.5 },
      { x: -18.5, y: -53.5 },
      { x: -3.5, y: -53.5 },
      { x: -1.5, y: -25 },
      { x: -1.5, y: -1.5 },
      { x: -25, y: -1.5 },
      { x: -25, y: 0 },
    ];

    const cProfilePoints: ApgA3D_IPoint2D[] = [
      { x: 0, y: 0 },
      { x: 25, y: 0 },
      { x: 25, y: -25 },
      { x: 23.5, y: -25 },
      { x: 23.5, y: -1.5 },
      { x: 1.5, y: -1.5 },
      { x: 1.5, y: -53.5 },
      { x: 23.5, y: -53.5 },
      { x: 23.5, y: -35 },
      { x: 25, y: -35 },
      { x: 25, y: -55 },
      { x: 0, y: -55 },
    ];

    this._outlines = {
      [BrdBlm_TC_SeD_eSlidingTracksOutlineType.UNDEFINED]: [],
      [BrdBlm_TC_SeD_eSlidingTracksOutlineType.ANGLE_BAR]: angleBarPoints,
      [BrdBlm_TC_SeD_eSlidingTracksOutlineType.TRACK]: trackPoints,
      [BrdBlm_TC_SeD_eSlidingTracksOutlineType.C_PROFILE]: cProfilePoints,
    };

  }

  static Get(atype: BrdBlm_TC_SeD_eSlidingTracksOutlineType) {

    this.#init();

    return this._outlines![atype];
  }

}
