/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */


import {
  BrdBlm_TC_SeD_eSlidingTrackFinish
} from "../../../enums/BrdBlm_TC_SeD_eSlidingTrackFinish.ts";
import {
  BrdBlm_TC_SeD_V_eSlidingSystem
} from "../../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";


/**
 * Descrittore dei parametri di configurazione delle tipologie di guide di
 * scorrimento del portone sezionale a scorrimento verticale
 */
export interface BrdBlm_TC_SeD_V_ST_IParams {

  /**
   * Nome dei parametri. Viene usato per etichettare questo set di parametri.
   */
  name: string;

  /**
   * Tipo di scorrimento del portone sezionale a scorrimento verticale
   */
  type: BrdBlm_TC_SeD_V_eSlidingSystem;

  /**
   * Altezza del portone sezionale a scorrimento verticale
   */
  height: number;

  /**
   * Larghezza del portone sezionale a scorrimento verticale
   */
  width: number;

  /**
   * Architrave del portone sezionale a scorrimento verticale
   */
  lintel: number;

  /**
   * Inclinazione delle guide del portone sezionale a scorrimento verticale rispetto
   * al piano orizzontale
   */
  inclinationInDegrees: number;

  /**
   * Lo scorrimento è realizzato con profilati di lamiera di spessore maggiorato
   */
  isHeavySheetMetal: boolean;

  /**
   * Lo scorrimento ha il motore a traino laterale
   */
  hasLateralPullingMotor: boolean;

  /**
   * Lo scorrimento ha il motore a traino di tipo Sommer quindi potrebbero
   * servire le guide prolungate
   */
  hasSommerPullingMotor: boolean;

  /**
   * Finitura delle guide di scorrimento
   */
  finish: BrdBlm_TC_SeD_eSlidingTrackFinish;

  /**
   * Global server time identifier per gestire la generazione in cache delle
   * mesh tridimensionali nel file GLTF lato server.
   */
  gstId?: string;
}
