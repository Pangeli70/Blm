/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_ePlacementOperation
} from "../enums/BrdBlm_ePlacementOperation.ts";
import {
    BrdBlm_IPlacementOperation
} from "../interfaces/BrdBlm_IPlacementOperation.ts";

/**
 * Base per gli oggetti estrudibili e posizionabili.
 */
export class BrdBlm_Extrudable {

    /**
     * Lunghezza dell'estruso prima dell'eventuale taglio
     */
    length = 0;

    /**
     * Elenco delle operazioni di posizionamento ed orientamento
     */
    placement: BrdBlm_IPlacementOperation[] = [];



    #addOp(
        aop: BrdBlm_IPlacementOperation,
        aindex: number
    ) {
        const i = Math.round(aindex);
        if (i < 0 || i >= this.placement.length) {
            this.placement.push(aop);
        }
        else {
            this.placement.splice(i, 0, aop);
        }

    }



    rotateX(
        aradians: number,
        aindex = -1
    ) {
        const op = {
            operation: BrdBlm_ePlacementOperation.ROTATE_X_IN_RAD,
            value: aradians
        }
        this.#addOp(op, aindex);
    }



    rotateY(
        aradians: number,
        aindex = -1
    ) {
        const op = {
            operation: BrdBlm_ePlacementOperation.ROTATE_Y_IN_RAD,
            value: aradians
        }
        this.#addOp(op, aindex);
    }



    rotateZ(
        aradians: number,
        aindex = -1
    ) {
        const op = {
            operation: BrdBlm_ePlacementOperation.ROTATE_Z_IN_RAD,
            value: aradians
        }
        this.#addOp(op, aindex);
    }



    translateX(
        amillimeters: number,
        aindex = -1
    ) {
        const op = {
            operation: BrdBlm_ePlacementOperation.TRANSLATE_X_IN_MM,
            value: amillimeters
        }
        this.#addOp(op, aindex);
    }



    translateY(
        amillimeters: number,
        aindex = -1
    ) {
        const op = {
            operation: BrdBlm_ePlacementOperation.TRANSLATE_Y_IN_MM,
            value: amillimeters
        }
        this.#addOp(op, aindex);
    }



    translateZ(
        amillimeters: number,
        aindex = -1
    ) {
        const op = {
            operation: BrdBlm_ePlacementOperation.TRANSLATE_X_IN_MM,
            value: amillimeters
        }
        this.#addOp(op, aindex);
    }

}
