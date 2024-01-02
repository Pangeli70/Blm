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
    BrdBlm_TC_SeD_V_ST_RULES
} from "../consts/BrdBlm_TC_SeD_V_ST_RULES.ts";
import {
    BrdBlm_TC_SeD_V_ST_eUpperCurveType
} from "../enums/BrdBlm_TC_SeD_V_ST_eUpperCurveType.ts";
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



    /**
     * Arrotonda per eccesso una misura in lunghezza alla misura multipla
     * del passo specificato
     */
    static #getFixedStepLenght(
        alength: number,
        astepLength: number
    ) {

        const rawSteps = alength / astepLength;
        const steps = Math.ceil(rawSteps);
        const r = steps * astepLength;
        return r;

    }



    static #getFirstAngleBarLenght(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {
        let r = 0;
        switch (atracksParams.type) {

            case BrdBlm_TC_SeD_V_eSlidingSystem.S1: {
                r = atracksParams.height +
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S1;
                break;
            }

            // OK APG 20231129
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2I: {
                r = atracksParams.height +
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S2;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S2R:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2RI: {
                r = atracksParams.height +
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S2R;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3I: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = atracksParams.height +
                        atracksParams.lintel -
                        BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S3;
                }
                else {
                    r = atracksParams.height +
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = atracksParams.height +
                        atracksParams.lintel -
                        BrdBlm_TC_SeD_V_ST_RULES.RETURN_PULLEY_HEIGHT_S3R_S4R;
                }
                else {
                    r = atracksParams.height +
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3R_S4R;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4: {
                r = atracksParams.height +
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4R: {
                r = atracksParams.height +
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SD:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SDB:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SDI: {
                r = atracksParams.height;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB1: {
                r = atracksParams.height - 100;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB2: {
                r = atracksParams.height - 100;
                break;
            }
            case BrdBlm_TC_SeD_V_eSlidingSystem.STO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB3: {
                r = atracksParams.height - 100;
                break;
            }
            case BrdBlm_TC_SeD_V_eSlidingSystem.SR: {
                r = atracksParams.height - 100;
                break;
            }
            default: {
                throw new Error(`Tipo di scorrimento [${atracksParams.type}] sconosciuto o non gestito`);
            }

        }
        return r;
    }



    static #getSecondAngleBarLenght(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {

        let r = 0;

        switch (atracksParams.type) {

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3I: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = 0
                }
                else {
                    r = atracksParams.lintel -
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4 -
                        BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S3;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = 0;
                }
                else {
                    r = atracksParams.lintel -
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3R_S4R -
                        BrdBlm_TC_SeD_V_ST_RULES.RETURN_PULLEY_HEIGHT_S3R_S4R;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4: {
                r = atracksParams.lintel -
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4 -
                    BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S4;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4R: {
                r = atracksParams.lintel -
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4 -
                    BrdBlm_TC_SeD_V_ST_RULES.RETURN_PULLEY_HEIGHT_S3R_S4R;
                break;
            }

            default: {
                r = 0;
            }

        }
        return r;
    }



    static #getFirstVerticalTrackLenght(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {
        let r = atracksParams.height -
            BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_FLOOR_DISTANCE;
        switch (atracksParams.type) {

            case BrdBlm_TC_SeD_V_eSlidingSystem.S1: {
                r -= BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_DIMINISH_S1;
                break;
            }

            // OK APG 20231129
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2I: {
                r -= BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_DIMINISH_S2;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S2R:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2RI: {
                r -= BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_DIMINISH_S1;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3I: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = atracksParams.height -
                        atracksParams.lintel +
                        BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S3;
                }
                else {
                    r = atracksParams.height +
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = atracksParams.height -
                        atracksParams.lintel +
                        BrdBlm_TC_SeD_V_ST_RULES.RETURN_PULLEY_HEIGHT_S3R_S4R;
                }
                else {
                    r = atracksParams.height +
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3R_S4R;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4: {
                r = atracksParams.height +
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4R: {
                r = atracksParams.height +
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SD:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SDB:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SDI: {
                r = atracksParams.height;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB1: {
                r = atracksParams.height - 100;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB2: {
                r = atracksParams.height - 100;
                break;
            }
            case BrdBlm_TC_SeD_V_eSlidingSystem.STO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB3: {
                r = atracksParams.height - 100;
                break;
            }
            case BrdBlm_TC_SeD_V_eSlidingSystem.SR: {
                r = atracksParams.height - 100;
                break;
            }
            default: {
                throw new Error(`Tipo di scorrimento [${atracksParams.type}] sconosciuto o non gestito`);
            }

        }
        return r;
    }



    static #getFirstVerticalTrackAngleRadians(
        atype: BrdBlm_TC_SeD_V_eSlidingSystem,
        alength: number
    ) {
        const bottomAperture = 45;
        let topAperture = 90;

        switch (atype) {
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S4R: {
                {
                    topAperture = 60;
                    break;
                }
            }
        }

        const deltaAperture = topAperture - bottomAperture;
        const sin = deltaAperture / alength;
        const r = Math.asin(sin);

        return r;
    }



    static #getSecondVerticalTrackLenght(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {

        let r = 0;

        switch (atracksParams.type) {

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3I: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = 0
                }
                else {
                    r = atracksParams.lintel -
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4 -
                        BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S3;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = 0;
                }
                else {
                    r = atracksParams.lintel -
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3R_S4R -
                        BrdBlm_TC_SeD_V_ST_RULES.RETURN_PULLEY_HEIGHT_S3R_S4R;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4: {
                r = atracksParams.lintel -
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4 -
                    BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S4;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4R: {
                r = atracksParams.lintel -
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4 -
                    BrdBlm_TC_SeD_V_ST_RULES.RETURN_PULLEY_HEIGHT_S3R_S4R;
                break;
            }

            default: {
                r = 0;
            }

        }
        return r;
    }



    static #getHorizontalCProfileLenght(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {

        const rawCLenght = atracksParams.height + BrdBlm_TC_SeD_V_ST_RULES.C_PROFILE_HORIZONTAL_RAISE;

        let r = this.#getFixedStepLenght(
            rawCLenght,
            BrdBlm_TC_SeD_V_ST_RULES.C_PROFILE_STEP
        );

        switch (atracksParams.type) {

            case BrdBlm_TC_SeD_V_eSlidingSystem.S2:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2R: {
                if (atracksParams.hasLateralPullingMotor) {
                    r += BrdBlm_TC_SeD_V_ST_RULES.C_PROFILE_LATERAL_PULLING_MOTOR_RISE
                }
                break;
            }


            case BrdBlm_TC_SeD_V_eSlidingSystem.S3:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3I: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = atracksParams.height -
                        atracksParams.lintel +
                        BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S3;
                }
                else {
                    r = atracksParams.height +
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = atracksParams.height -
                        atracksParams.lintel +
                        BrdBlm_TC_SeD_V_ST_RULES.RETURN_PULLEY_HEIGHT_S3R_S4R;
                }
                else {
                    r = atracksParams.height +
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3R_S4R;
                }
                break;
            }


            case BrdBlm_TC_SeD_V_eSlidingSystem.S4:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S4R: {
                r = 0;
                break;
            }


            case BrdBlm_TC_SeD_V_eSlidingSystem.SD:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SDB:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SDI: {
                r = atracksParams.height;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB1: {
                r = atracksParams.height - 100;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB2: {
                r = atracksParams.height - 100;
                break;
            }
            case BrdBlm_TC_SeD_V_eSlidingSystem.STO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB3: {
                r = 0;
                break;
            }

            default: {
                r = 0;
            }

        }
        return r;
    }



    static #getFirstHorizontalTrackLenght(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {

        const rawCLenght = atracksParams.height + BrdBlm_TC_SeD_V_ST_RULES.C_PROFILE_HORIZONTAL_RAISE;

        let r = this.#getFixedStepLenght(
            rawCLenght,
            BrdBlm_TC_SeD_V_ST_RULES.C_PROFILE_STEP
        );

        switch (atracksParams.type) {

            case BrdBlm_TC_SeD_V_eSlidingSystem.S1: {
                r -= BrdBlm_TC_SeD_V_ST_RULES.CURVE_300_HORIZONTAL_SPACE;
                r -= BrdBlm_TC_SeD_V_ST_RULES.LOWER_HORIZONTAL_TRACK_BACK_SPACE;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S2:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2I: {
                r -= BrdBlm_TC_SeD_V_ST_RULES.CURVE_380_HORIZONTAL_SPACE;
                r -= BrdBlm_TC_SeD_V_ST_RULES.LOWER_HORIZONTAL_TRACK_BACK_SPACE;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S2R:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2RI: {
                r -= BrdBlm_TC_SeD_V_ST_RULES.CURVE_300_HORIZONTAL_SPACE;
                r -= BrdBlm_TC_SeD_V_ST_RULES.LOWER_HORIZONTAL_TRACK_BACK_SPACE;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3I: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = atracksParams.height -
                        atracksParams.lintel +
                        BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S3;
                }
                else {
                    r = atracksParams.height +
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R: {
                if (atracksParams.lintel < BrdBlm_TC_SeD_V_ST_RULES.MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3) {
                    r = atracksParams.height -
                        atracksParams.lintel +
                        BrdBlm_TC_SeD_V_ST_RULES.RETURN_PULLEY_HEIGHT_S3R_S4R;
                }
                else {
                    r = atracksParams.height +
                        BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3R_S4R;
                }
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4: {
                r = atracksParams.height +
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.S4R: {
                r = atracksParams.height +
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SD:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SDB:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SDI: {
                r = atracksParams.height;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB1: {
                r = atracksParams.height - 100;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB2: {
                r = atracksParams.height - 100;
                break;
            }
            case BrdBlm_TC_SeD_V_eSlidingSystem.STO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB3: {
                r = atracksParams.height - 100;
                break;
            }
            case BrdBlm_TC_SeD_V_eSlidingSystem.SR: {
                r = atracksParams.height - 100;
                break;
            }
            default: {
                throw new Error(`Tipo di scorrimento [${atracksParams.type}] sconosciuto o non gestito`);
            }

        }
        return r;
    }



    static #getSecondHorizontalTrackLenght(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {

        let r = 0;

        switch (atracksParams.type) {


            case BrdBlm_TC_SeD_V_eSlidingSystem.SO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB1: {
                r = atracksParams.lintel -
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4 -
                    BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S3;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB2: {
                r = atracksParams.lintel -
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4 -
                    BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S3;
                break;
            }


            case BrdBlm_TC_SeD_V_eSlidingSystem.STO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB3: {
                r = atracksParams.lintel -
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3_S4 -
                    BrdBlm_TC_SeD_V_ST_RULES.BALANCING_GROUP_HEIGHT_S3;
                break;
            }

            case BrdBlm_TC_SeD_V_eSlidingSystem.SR:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S1: {
                r = atracksParams.lintel -
                    BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S3R_S4R -
                    BrdBlm_TC_SeD_V_ST_RULES.RETURN_PULLEY_HEIGHT_S3R_S4R;
                break;
            }

            default: {
                r = 0;
            }

        }
        return r;
    }



    static #getUpperCurveData(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {

        const r = {
            type: BrdBlm_TC_SeD_V_ST_eUpperCurveType.NONE,
        };

        switch (atracksParams.type) {
            case BrdBlm_TC_SeD_V_eSlidingSystem.SR:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S1: {
                r.type = BrdBlm_TC_SeD_V_ST_eUpperCurveType.SR_S1
                break
            }
            case BrdBlm_TC_SeD_V_eSlidingSystem.SO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB1:
            case BrdBlm_TC_SeD_V_eSlidingSystem.STO:
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB3: {
                r.type = BrdBlm_TC_SeD_V_ST_eUpperCurveType.SO_STO
                break
            }
            case BrdBlm_TC_SeD_V_eSlidingSystem.SMB2: {
                r.type = BrdBlm_TC_SeD_V_ST_eUpperCurveType.SMB2
                break
            }
        }


        return r;
    }



    static #getRearTemplateLengths(atracksParams: BrdBlm_TC_SeD_V_ST_IParams) {
        const r: number[] = [];

        const totalLenght = atracksParams.width + BrdBlm_TC_SeD_V_ST_RULES.REAR_TEMPLATE_TOTAL_RAISE;
        r.push(totalLenght / 2);
        r.push(totalLenght / 2);

        return r;
    }

}