/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal } from "./BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal.ts";


/**
 * Definizione degli spezzoni dei profilati lineari delle guide di scorrimento 
 * dei portoni sezionali a scorrimento verticale.
 * E' una classe e non una intefaccia per poter sfuttare i parametri di default
 * del costruttore.
 */
export class BrdBlm_TC_SeD_V_ST_LinearStretch extends BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal {


  /**
   * Questo è un tratto rettilineo di tipo di guida
   */
  readonly isStretch = true;


}
