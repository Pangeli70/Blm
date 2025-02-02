/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_IPoint3D } from "../../../../../../../../../A3D/lib/interfaces/ApgA3D_IPoint3D.ts";
import { BrdBlm_TC_SeD_V_eSlidingSystem } from "../../../../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";
import { BrdBlm_TC_SeD_V_ST_RULES } from "../../../consts/BrdBlm_TC_SeD_V_ST_RULES.ts";
import { BrdBlm_TC_SeD_V_ST_ePartName } from "../../../enums/BrdBlm_TC_SeD_V_ST_ePartName.ts";
import { BrdBlm_TC_SeD_V_ST_RegularCurve } from "../../parts/BrdBlm_TC_SeD_V_ST_RegularCurve.ts";
import { BrdBlm_TC_SeD_V_ST_GenericLift } from "./BrdBlm_TC_SeD_V_ST_GenericLift.ts";



/**
 * Classe base per guide di scorrimento dei portoni sezionali a scorrimento
 * orizzontale o inclinato del tipo S2, S2i, S2R, S2Ri
 */
export class BrdBlm_TC_SeD_V_ST_NormalLift extends BrdBlm_TC_SeD_V_ST_GenericLift {


    /**
     * Calcola i dati della curva
     */
    protected getRegularCurve() {

        const r = new BrdBlm_TC_SeD_V_ST_RegularCurve();

        r.name = BrdBlm_TC_SeD_V_ST_ePartName.REGULAR_CURVES;
        r.finish = this.params.finish;

        if (this.params.isHeavySheetMetal) {
            r.sheetMetalWidth = BrdBlm_TC_SeD_V_ST_RULES.SHEET_METAL_HEAVY_WIDTH;
        }

        switch (this.params.type) {
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S2I:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3I:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R:
                r.radious = BrdBlm_TC_SeD_V_ST_RULES.REGULAR_CURVE_BIG_RADIOUS;
                r.length = BrdBlm_TC_SeD_V_ST_RULES.BIG_CURVE_INITIAL_LENGTH;
                break;
            default:
                r.radious = BrdBlm_TC_SeD_V_ST_RULES.SMALL_CURVE_RADIOUS;
                r.length = BrdBlm_TC_SeD_V_ST_RULES.SMALL_CURVE_INITIAL_LENGHT;
                break;
        }

        let rotationAlongXInRadians = 0;

        switch (this.params.type) {
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3I:
            case BrdBlm_TC_SeD_V_eSlidingSystem.S3R:
                rotationAlongXInRadians =
                    -BrdBlm_TC_SeD_V_ST_RULES.CURVE_S3_ANGLE_IN_DEGREES * this._TO_RAD;
                r.angleInDegrees =
                    BrdBlm_TC_SeD_V_ST_RULES.CURVE_S3_ANGLE_IN_DEGREES;
                break;
            default:
                rotationAlongXInRadians =
                    -(2 + BrdBlm_TC_SeD_V_ST_RULES.REGULAR_CURVE_DEFAULT_ANGLE_IN_DEGREES) * this._TO_RAD;
                r.angleInDegrees =
                    BrdBlm_TC_SeD_V_ST_RULES.REGULAR_CURVE_DEFAULT_ANGLE_IN_DEGREES;
                break;
        }

        r.angleInDegrees -= this.params.inclinationInDegrees;

        const pathRadious = r.radious + BrdBlm_TC_SeD_V_ST_RULES.TRACK_HEIGHT;

        r.center = {
            x: 0,
            y: -pathRadious,
            z: BrdBlm_TC_SeD_V_ST_RULES.CURVE_FIRST_LINEAR_CHUNK
        };

        r.path = this.#buildExtrusionPath(r, pathRadious);

        r.addRotateXOp(rotationAlongXInRadians, false);

        r.addRotateZOp(2 * this.RAD_90, true);

        const txValue =
            this.params.width / 2 +
            BrdBlm_TC_SeD_V_ST_RULES.REAR_TEMPLATE_TOTAL_RAISE / 2;
        r.addTranslateXOp(txValue, true);

        this.profiledParts.set(r.name, r);

        return r;

    }



    /**
     * Get the extrusion path of the curve
     */
    #buildExtrusionPath(
        curve: BrdBlm_TC_SeD_V_ST_RegularCurve,
        pathRadious: number
    ) {
        const MIN_ANGLE_SLICE_IN_DEG = 5;

        const r: ApgA3D_IPoint3D[] = [];

        r.push({
            x: 0,
            y: 0,
            z: 0
        });
        r.push({
            x: 0,
            y: 0,
            z: BrdBlm_TC_SeD_V_ST_RULES.CURVE_FIRST_LINEAR_CHUNK
        });

        const numberOfCurveSegments = Math.round(curve.angleInDegrees / MIN_ANGLE_SLICE_IN_DEG);

        const angleSliceInRadians = (curve.angleInDegrees / numberOfCurveSegments) * this._TO_RAD;

        for (let i = 1; i <= numberOfCurveSegments; i++) {

            const currAngleInRadians = this.RAD_90 - (i * angleSliceInRadians);
            const sin = Math.sin(currAngleInRadians) * pathRadious;
            const cos = Math.cos(currAngleInRadians) * pathRadious;

            const y = curve.center.y + sin;
            const z = curve.center.z + cos;

            r.push({ x: 0, y, z });
        }

        const arcLength = (Math.PI * 2 * curve.radious) / 360 * curve.angleInDegrees;

        const lastSlice = (curve.radious == BrdBlm_TC_SeD_V_ST_RULES.REGULAR_CURVE_BIG_RADIOUS) ?
            BrdBlm_TC_SeD_V_ST_RULES.BIG_CURVE_TERMINAL_FIXED_SLICE :
            BrdBlm_TC_SeD_V_ST_RULES.SMALL_CURVE_TERMINAL_FIXED_SLICE;

        const secondLinearChunkLength =
            curve.length -
            BrdBlm_TC_SeD_V_ST_RULES.CURVE_FIRST_LINEAR_CHUNK -
            arcLength -
            lastSlice;

        const secondLinearChunkAngleInRadians = (90 - curve.angleInDegrees) * this._TO_RAD;
        const sin = Math.sin(secondLinearChunkAngleInRadians) * secondLinearChunkLength;
        const cos = Math.cos(secondLinearChunkAngleInRadians) * secondLinearChunkLength;

        const lastIndex = r.length - 1;
        const y = r[lastIndex].y - cos;
        const z = r[lastIndex].z + sin;

        r.push({ x: 0, y, z });
        return r;
    }



    /**
     * Profilo a C orizzontale
     */
    protected getHorizontalCProfileStretch() {
        this.notImplemented(this.getHorizontalCProfileStretch.name);
    };



    /**
     * Guida orizzontale
     */
    protected getHorizontalTrackStretch() {
        this.notImplemented(this.getHorizontalTrackStretch.name);
    };



    getComponents() {

        this.getAngleBarFirstStretch();
        this.getVerticalTrackFirstStretch();
        this.getRegularCurve();
        this.getRearTemplateStretch();

        this.getHorizontalCProfileStretch();
        this.getHorizontalTrackStretch();

        return this.profiledParts;
    };


}
