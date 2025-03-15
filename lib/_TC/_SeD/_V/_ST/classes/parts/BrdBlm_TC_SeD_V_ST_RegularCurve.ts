/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */


import { A3D } from "../../../../../../deps.ts";
import { BrdBlm_TC_SeD_eSlidingTracksOutlineType } from "../../../../enums/BrdBlm_TC_SeD_eSlidingTracksOutlineType.ts";
import { BrdBlm_TC_SeD_V_ST_RULES } from "../../consts/BrdBlm_TC_SeD_V_ST_RULES.ts";
import { BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal } from "./BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal.ts";



/**
 * Definizione dei dati della curva delle guide di scorrimento dei portoni
 * sezionali a scorrimento verticale.
 * E' una classe e non una intefaccia per poter sfuttare i parametri di default
 * del costruttore.
 */
export class BrdBlm_TC_SeD_V_ST_RegularCurve extends BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal {

  /**
   * Questo oggetto è una curva
   */
  override readonly isCurve = true;

  /**
   * Tipo di profilo
   */
  override outlineType = BrdBlm_TC_SeD_eSlidingTracksOutlineType.TRACK;


  /**
   * Raggio interno della curva
   */
  radious: number = BrdBlm_TC_SeD_V_ST_RULES.REGULAR_CURVE_BIG_RADIOUS;

  /**
   * Angolo della curva es. 89, 84 o in base alla inclinazione
   */
  angleInDegrees: number = BrdBlm_TC_SeD_V_ST_RULES.REGULAR_CURVE_DEFAULT_ANGLE_IN_DEGREES;

  /**
   * Centro della curva per i calcoli di estrusione e posizionamento
   */
  center: A3D.ApgA3D_IPoint3D = { x: 0, y: 0, z: 0 };

  /**
   * Percorso di estrusione della curva
   */
  path: A3D.ApgA3D_IPoint3D[] = [];

}
