/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_TC_SeD_V_ST_ePartName
} from "../enums/BrdBlm_TC_SeD_V_ST_ePartName.ts";
import {
  BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal
} from "../classes/parts/BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal.ts";

/**
 * Definizione della mappa che contiene i vari profilati che compongono il 
 * componenti del sistema di guide di scorrimento dei portoni sezionali 
 * a scorrimento verticale
 */
export type BrdBlm_TC_SeD_V_ST_TProfiledSheetMetalMap = Map<
  BrdBlm_TC_SeD_V_ST_ePartName,
  BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal
>;
