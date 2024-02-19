/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20231116
 * ----------------------------------------------------------------------------
 */

import {
    BrdBlm_TC_SeD_eSlidingTrackFinish
} from "../../../enums/BrdBlm_TC_SeD_eSlidingTrackFinish.ts";
import {
    BrdBlm_TC_SeD_V_eSlidingSystem
} from "../../enums/BrdBlm_TC_SeD_V_eSlidingSystem.ts";
import {
    BrdBlm_TC_SeD_V_ST_IParams
} from "../interfaces/BrdBlm_TC_SeD_V_ST_IParams.ts";
import {
    BrdBlm_TC_SeD_V_ST_IParams_Signature
} from "../mod.ts";



export const BrdBlm_TC_SeD_V_ST_Tests: BrdBlm_TC_SeD_V_ST_IParams[] = [
    {
        signature: BrdBlm_TC_SeD_V_ST_IParams_Signature,
        name: "Sliding tracks test S1-1",
        type: BrdBlm_TC_SeD_V_eSlidingSystem.S1,
        width: 3500,
        height: 2500,
        lintel: 260,
        inclinationInDegrees: 0,
        isHeavySheetMetal:false,
        hasLateralPullingMotor: false,
        hasSommerPullingMotor: false,
        finish: BrdBlm_TC_SeD_eSlidingTrackFinish.GALVANIZED
    } as const,
    {
        signature: BrdBlm_TC_SeD_V_ST_IParams_Signature,
        name: "S2-1",
        type: BrdBlm_TC_SeD_V_eSlidingSystem.S2,
        width: 3000,
        height: 4700,
        lintel: 420,
        inclinationInDegrees: 0,
        isHeavySheetMetal: false,
        hasLateralPullingMotor: false,
        hasSommerPullingMotor: false,
        finish: BrdBlm_TC_SeD_eSlidingTrackFinish.WHITE
    } as const,
    {
        signature: BrdBlm_TC_SeD_V_ST_IParams_Signature,
        name: "S2-2",
        type: BrdBlm_TC_SeD_V_eSlidingSystem.S2,
        width: 6000,
        height: 2250,
        lintel: 420,
        inclinationInDegrees: 0,
        isHeavySheetMetal: false,
        hasLateralPullingMotor: false,
        hasSommerPullingMotor: false,
        finish: BrdBlm_TC_SeD_eSlidingTrackFinish.GALVANIZED
    } as const,
    {
        signature: BrdBlm_TC_SeD_V_ST_IParams_Signature,
        name: "S2I-1",
        type: BrdBlm_TC_SeD_V_eSlidingSystem.S2I,
        width: 3000,
        height: 4700,
        lintel: 420,
        inclinationInDegrees: 15,
        isHeavySheetMetal: false,
        hasLateralPullingMotor: false,
        hasSommerPullingMotor: false,
        finish: BrdBlm_TC_SeD_eSlidingTrackFinish.BLACK
    } as const,
    {
        signature: BrdBlm_TC_SeD_V_ST_IParams_Signature,
        name: "S3-1",
        type: BrdBlm_TC_SeD_V_eSlidingSystem.S3,
        width: 4500,
        height: 3500,
        lintel: 2200,
        inclinationInDegrees: 0,
        isHeavySheetMetal: false,
        hasLateralPullingMotor: false,
        hasSommerPullingMotor: false,
        finish: BrdBlm_TC_SeD_eSlidingTrackFinish.GALVANIZED
    } as const,
    {
        signature: BrdBlm_TC_SeD_V_ST_IParams_Signature,
        name: "S3I-1",
        type: BrdBlm_TC_SeD_V_eSlidingSystem.S3I,
        width: 3500,
        height: 2500,
        lintel: 2000,
        inclinationInDegrees: 15,
        isHeavySheetMetal: false,
        hasLateralPullingMotor: false,
        hasSommerPullingMotor: false,
        finish: BrdBlm_TC_SeD_eSlidingTrackFinish.GALVANIZED
    } as const,
];