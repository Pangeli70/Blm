/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

import { BrdBlm_TC_SeD_eSlidingTracksOutlineType } from "../../../../../enums/BrdBlm_TC_SeD_eSlidingTracksOutlineType.ts";
import { BrdBlm_TC_SeD_V_eClutterType } from "../../../../enums/BrdBlm_TC_SeD_V_eClutterType.ts";
import { BrdBlm_TC_SeD_V_eLiftingAidType } from "../../../../enums/BrdBlm_TC_SeD_V_eLiftingAidType.ts";
import { BrdBlm_TC_SeD_V_eSlidingSystem } from "../../../../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";
import { BrdBlm_TC_SeD_V_ST_RULES } from "../../../consts/BrdBlm_TC_SeD_V_ST_RULES.ts";
import { BrdBlm_TC_SeD_V_ST_ePartName } from "../../../enums/BrdBlm_TC_SeD_V_ST_ePartName.ts";
import { BrdBlm_TC_SeD_V_ST_IData } from "../../../interfaces/BrdBlm_TC_SeD_V_ST_IData.ts";
import { BrdBlm_TC_SeD_V_ST_LinearStretch } from "../../parts/BrdBlm_TC_SeD_V_ST_LinearStretch.ts";
import { BrdBlm_TC_SeD_V_ST_NormalLift } from "../abstract/BrdBlm_TC_SeD_V_ST_NormalLift.ts";


/**
 * Guide di scorrimento dei portoni sezionali a scorrimento
 * normale del tipo S2 ed S2i
 */
export class BrdBlm_TC_SeD_V_ST_S2 extends BrdBlm_TC_SeD_V_ST_NormalLift {

    get data() {

        const r: BrdBlm_TC_SeD_V_ST_IData = {

            system: BrdBlm_TC_SeD_V_eSlidingSystem.S2,

            minHeight: 1500,
            maxHeight: 10000,

            minWidth: 1000,
            maxWidth: 8000,

            minEmbrasure: 90,

            minLintel: 420,
            maxLintel: 420,

            maxInclination: 0,

            clutters: [
                {
                    clutterType: BrdBlm_TC_SeD_V_eClutterType.BASE,
                    liftingAidType: BrdBlm_TC_SeD_V_eLiftingAidType.NONE,
                    value: 0
                } as const
            ],

            liftingAids: {
                [BrdBlm_TC_SeD_V_eLiftingAidType.NONE]: true,
                [BrdBlm_TC_SeD_V_eLiftingAidType.MANUAL_WINCH]: true,
                [BrdBlm_TC_SeD_V_eLiftingAidType.PULLING_MOTOR]: true,
                [BrdBlm_TC_SeD_V_eLiftingAidType.DIRECT_MOTOR]: true,
                [BrdBlm_TC_SeD_V_eLiftingAidType.CHAIN_AND_PINION]: true
            } as const

        };
        return r;
    }



    protected getAngleBarFirstStretch() {

        const r = super.getAngleBarFirstStretch();

        r.length =
            this.params.height +
            BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S2;

        return r;
    }



    protected getVerticalTrackFirstStretch() {

        const r = super.getVerticalTrackFirstStretch();

        r.length =
            this.params.height -
            BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_FLOOR_DISTANCE -
            BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_DIMINISH_S2;

        const rxValue =
            -this.RAD_90 +
            this.getVerticalTrackFirstStretchAngleInRadians(
                this.params.type,
                r.length
            );
        r.addRotateXOp(rxValue, false, 0);

        return r;
    }



    protected getCProfileLength() {

        const rawLength = this.params.height +
            BrdBlm_TC_SeD_V_ST_RULES.C_PROFILE_HORIZONTAL_RAISE;

        const r = this.getFixedStepLenght(
            rawLength,
            BrdBlm_TC_SeD_V_ST_RULES.C_PROFILE_STEP
        );

        return r;
    }



    protected getHorizontalCProfileStretch() {

        const stretch = new BrdBlm_TC_SeD_V_ST_LinearStretch();

        stretch.name = BrdBlm_TC_SeD_V_ST_ePartName.HORIZONTAL_C_PROFILES;
        stretch.finish = this.params.finish;

        stretch.outlineType = BrdBlm_TC_SeD_eSlidingTracksOutlineType.C_PROFILE;
        stretch.length = this.getCProfileLength();

        const txValue = this.params.width / 2 +
            BrdBlm_TC_SeD_V_ST_RULES.REAR_TEMPLATE_TOTAL_RAISE / 2 +
            BrdBlm_TC_SeD_V_ST_RULES.SHEET_METAL_LIGHT_WIDTH
        stretch.addTranslateXOp(txValue, true);

        const tyValue = this.params.height +
            BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S2
        stretch.addTranslateYOp(tyValue, false);

        this.profiledParts.set(
            stretch.name,
            stretch
        );

    }



    protected getHorizontalTrackStretch() {

        const stretch = new BrdBlm_TC_SeD_V_ST_LinearStretch();

        stretch.name = BrdBlm_TC_SeD_V_ST_ePartName.HORIZONTAL_TRACKS;
        stretch.finish = this.params.finish;

        stretch.outlineType = BrdBlm_TC_SeD_eSlidingTracksOutlineType.TRACK;
        stretch.length =
            this.getCProfileLength() -
            BrdBlm_TC_SeD_V_ST_RULES.CURVE_380_HORIZONTAL_SPACE -
            BrdBlm_TC_SeD_V_ST_RULES.LOWER_HORIZONTAL_TRACK_BACK_SPACE;

        const txValue = this.params.width / 2 +
            BrdBlm_TC_SeD_V_ST_RULES.REAR_TEMPLATE_TOTAL_RAISE / 2;
        stretch.addTranslateXOp(txValue, true);

        const tyValue = this.params.height +
            BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S2;
        stretch.addTranslateYOp(tyValue, false);

        const tzValue = BrdBlm_TC_SeD_V_ST_RULES.CURVE_380_HORIZONTAL_SPACE +
            BrdBlm_TC_SeD_V_ST_RULES.SHEET_METAL_LIGHT_WIDTH +
            BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_UPPER_APERTURE;
        stretch.addTranslateZOp(tzValue, false);

        this.profiledParts.set(
            stretch.name,
            stretch
        );

    }



    protected getRearTemplateStretch() {

        const stretch = new BrdBlm_TC_SeD_V_ST_LinearStretch();

        stretch.name = BrdBlm_TC_SeD_V_ST_ePartName.REAR_C_TEMPLATES;
        stretch.finish = this.params.finish;

        stretch.outlineType = BrdBlm_TC_SeD_eSlidingTracksOutlineType.C_PROFILE;
        stretch.length = this.params.width / 2 +
            BrdBlm_TC_SeD_V_ST_RULES.REAR_TEMPLATE_TOTAL_RAISE / 2;

        // TODO modificare quando è inclinato -- APG 20231213
        const rxValue = this.params.inclinationInDegrees * this._TO_RAD;
        stretch.addRotateXOp(rxValue, false);

        const tyValue = this.params.height +
            BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S2;
        stretch.addTranslateYOp(tyValue, true);

        const tzValue = this.getCProfileLength()
        stretch.addTranslateZOp(tzValue, false);

        this.profiledParts.set(
            stretch.name,
            stretch
        );

    }



    protected getRegularCurve() {

        const r = super.getRegularCurve();

        const tyValue =
            this.params.height +
            BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_RAISE_S2 -
            BrdBlm_TC_SeD_V_ST_RULES.ANGLE_BAR_FIRST_VERTICAL_TRACK_JUNCTION_S2;
        r.addTranslateYOp(tyValue, false);

        const tzValue =
            r.sheetMetalWidth +
            BrdBlm_TC_SeD_V_ST_RULES.FIRST_VERTICAL_TRACK_UPPER_APERTURE;
        r.addTranslateZOp(tzValue, false);

        return r;
    }

}
