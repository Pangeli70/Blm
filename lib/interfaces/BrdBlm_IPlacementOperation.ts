/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20231227
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_ePlacementOperation
} from "../enums/BrdBlm_ePlacementOperation.ts";

/**
 * Operazione di posizionamento o di orientamento dei componenti 
 * dei prodotti nello spazio tridimensionale
 */
export interface BrdBlm_IPlacementOperation {

  /**
   * Codice identificativo del tipo di operazione di traslazione o rotazione
   */
  operation: BrdBlm_ePlacementOperation;

  /**
   * Valore della operazione di tralazione o di rotazione
   */
  value: number;

  /**
   * Flag che definisce una operazione di coppia che può essere applicata 
   * al secondo oggetto della coppia semplicemente invertendo il segno del 
   * valore numerico al campo precedente.
   */
  isFlippable?: boolean;
  
}
