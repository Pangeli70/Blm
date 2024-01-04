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
    BrdBlm_TC_SeD_V_ST_IData
} from "../../../interfaces/BrdBlm_TC_SeD_V_ST_IData.ts";
import {
    BrdBlm_TC_SeD_V_ST_IParams
} from "../../../interfaces/BrdBlm_TC_SeD_V_ST_IParams.ts";
import {
    BrdBlm_TC_SeD_V_ST_TProfiledSheetMetalMap
} from "../../../types/BrdBlm_TC_SeD_V_ST_TProfiledSheetMetalMap.ts";
import { BrdBlm_TC_SeD_eSlidingTracksOutlineType } from "../../../../../mod.ts";
import { BrdBlm_TC_SeD_V_ST_ePartName } from "../../../mod.ts";
import { BrdBlm_TC_SeD_V_ST_LinearStretch } from "../../parts/BrdBlm_TC_SeD_V_ST_LinearStretch.ts";


/**
 * Classe base per la gestione dei sistemi di scorrimento per i portoni
 * sezionali a scorrimento verticale
 */
export class BrdBlm_TC_SeD_V_ST_GenericLift {

    /**
     * 90 gradi sessaggesimali in radianti
     */
    protected readonly RAD_90 = Math.PI / 2;

    /**
     * Coefficiente di conversione da angoli sessaggesimali a radianti
     */
    protected readonly _TO_RAD = 2 * Math.PI / 360;


    /**
     * Replica di convenienza per il tipo di scorrimento specificato nei parametri
     */
    protected readonly type: BrdBlm_TC_SeD_V_eSlidingSystem;

    /**
     * Parametri di definizione dello scorrimento
     */
    protected readonly params: BrdBlm_TC_SeD_V_ST_IParams;

    /**
     * Risultato delle elaborazioni e dei calcoli, è una mappa che contiene tutti
     * i profilati di lamiera che compongono il sistema delle guide di scorrimento
     */
    protected readonly profiledParts: BrdBlm_TC_SeD_V_ST_TProfiledSheetMetalMap = new Map();

    /**
     * Dati tecnici caratteristici del sistema di guide di scorrimento
     */
    get data(): BrdBlm_TC_SeD_V_ST_IData | null {
        return null
    };


    /**
     * Costruttore standard
     */
    constructor(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {
        this.type = atracksParams.type;
        this.params = atracksParams;
    }



    /**
     * Arrotonda per eccesso una misura in lunghezza alla misura multipla
     * del passo specificato
     */
    protected getFixedStepLenght(
        alength: number,
        astepLength: number
    ) {

        const rawSteps = alength / astepLength;
        const steps = Math.ceil(rawSteps);
        const r = steps * astepLength;
        return r;

    }



    /**
     * Calcola l'inclinazione delle guide verticali primo tratto
     */
    protected getVerticalTrackFirstStretchAngleInRadians(
        atype: BrdBlm_TC_SeD_V_eSlidingSystem,
        alength: number
    ) {
        const baseAperture = BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_BASE_APERTURE;
        let upperAperture = BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_UPPER_APERTURE as number;

        switch (atype) {
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S4R: {
                {
                    upperAperture = BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_UPPER_APERTURE_REDUCED;
                    break;
                }
            }
        }

        const deltaAperture = upperAperture - baseAperture;
        const sin = deltaAperture / alength;
        const r = Math.asin(sin);

        return r;
    }



    /**
     * Asserzione per i metodi virtuali non implementati
     */
    protected notImplemented(amethod: string) {
        throw new Error(`The virtual method [${amethod}] for the sliding system [${this.type}] is not implemented`);
    }



    /**
     * Angolare primo tratto
     */
    protected getAngleBarFirstStretch() {

        const r = new BrdBlm_TC_SeD_V_ST_LinearStretch();

        r.name = BrdBlm_TC_SeD_V_ST_ePartName.ANGLE_BARS_FIRST_STRETCH;
        r.finish = this.params.finish;

        r.outlineType = BrdBlm_TC_SeD_eSlidingTracksOutlineType.ANGLE_BAR;

        r.addRotateXOp(-this.RAD_90, false);
        r.addTranslateXOp(this.params.width / 2, true)

        this.profiledParts.set(r.name, r);

        return r;
    };



    /**
     * Guida verticale primo tratto
     */
    protected getVerticalTrackFirstStretch() {
        

        const r = new BrdBlm_TC_SeD_V_ST_LinearStretch();

        r.name = BrdBlm_TC_SeD_V_ST_ePartName.VERTICAL_TRACKS_FIRST_STRETCH;
        r.finish = this.params.finish;

        r.outlineType = BrdBlm_TC_SeD_eSlidingTracksOutlineType.TRACK;


        r.addTranslateXOp(
            this.params.width / 2 +
            BrdBlm_TC_SeD_V_ST_RULES.REAR_TEMPLATE_TOTAL_RAISE / 2,
            true
        );
        r.addTranslateYOp(
            BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_FLOOR_DISTANCE,
            false
        );
        r.addTranslateZOp(
            r.sheetMetalWidth +
            BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_BASE_APERTURE,
            false
        );

        this.profiledParts.set(r.name, r);

        return r;


    }



    /**
     * Dima
     */
    protected getRearTemplateStretch() {
        this.notImplemented(this.getRearTemplateStretch.name);
    }



    /**
     * Esegue tutti i calcoli per tutti i componenti
     */
    getComponents() {
        this.notImplemented(this.getComponents.name);
        return this.profiledParts;
    }

}
