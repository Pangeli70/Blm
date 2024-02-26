/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto tutti gli altri tipi in file separati
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_V_eSlidingSystem
} from "../../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";
import {
    BrdBlm_TC_SeD_V_ST_GenericLift
} from "../classes/lifts/abstract/BrdBlm_TC_SeD_V_ST_GenericLift.ts";
import {
    BrdBlm_TC_SeD_V_ST_S2
} from "../classes/lifts/concrete/BrdBlm_TC_SeD_V_ST_S2.ts";
import {
    BrdBlm_TC_SeD_V_ST_IParams
} from "../interfaces/BrdBlm_TC_SeD_V_ST_IParams.ts";


/**
 * Gestore delle guide di scorrimento per i portoni sezionali verticali
 */
export class BrdBlm_TC_SeD_V_ST_Service {

    /**
     * Mappa dei costruttori delle classi che gestiscono la costruzione dei
     * componenti delle guide di scorrimento
     */
    private static _liftClasses: Map<
        BrdBlm_TC_SeD_V_eSlidingSystem,
        typeof BrdBlm_TC_SeD_V_ST_GenericLift
    > = new Map();

    /**
     * Il servizio è inizializzato
     */
    private static _initialized = false;



    static init() {

        if (this._initialized) return;

        this._liftClasses.set(BrdBlm_TC_SeD_V_eSlidingSystem.S2, BrdBlm_TC_SeD_V_ST_S2)
        // TODO aggiungere tutte le altre classi qui -- APG 20231227

        this._initialized = true;
    }



    static GetComponents(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {

        this.init();

        const LiftClass = this._liftClasses.get(atracksParams.type);

        if (LiftClass) {
            const liftObj = new LiftClass(atracksParams);
            return liftObj.getComponents();
        }

        return undefined;
    }


}