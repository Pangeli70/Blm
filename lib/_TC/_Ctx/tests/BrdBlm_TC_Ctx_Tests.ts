/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */


import { BrdBlm_TC_Ctx_eExternBaseboardColor } from "../enums/BrdBlm_TC_Ctx_eExternBaseboardColor.ts";
import { BrdBlm_TC_Ctx_eExternBaseboardFinish } from "../enums/BrdBlm_TC_Ctx_eExternBaseboardFinish.ts";

import { BrdBlm_TC_Ctx_eInternBaseboardColor } from "../enums/BrdBlm_TC_Ctx_eInternBaseboardColor.ts";
import { BrdBlm_TC_Ctx_eInternBaseboardFinish } from "../enums/BrdBlm_TC_Ctx_eInternBaseboardFinish.ts";
import { BrdBlm_TC_Ctx_eFacadeColor } from "../enums/BrdBlm_TC_Ctx_eFacadeColor.ts";
import { BrdBlm_TC_Ctx_eFacadeFinish } from "../enums/BrdBlm_TC_Ctx_eFacadeFinish.ts";
import { BrdBlm_TC_Ctx_eFloorColor } from "../enums/BrdBlm_TC_Ctx_eFloorColor.ts";
import { BrdBlm_TC_Ctx_eFloorFinish } from "../enums/BrdBlm_TC_Ctx_eFloorFinish.ts";
import { BrdBlm_TC_Ctx_ePavementColor } from "../enums/BrdBlm_TC_Ctx_ePavementColor.ts";
import { BrdBlm_TC_Ctx_ePavementFinish } from "../enums/BrdBlm_TC_Ctx_ePavementFinish.ts";
import { BrdBlm_TC_Ctx_eThresholdColor } from "../enums/BrdBlm_TC_Ctx_eThresholdColor.ts";
import { BrdBlm_TC_Ctx_eThresholdFinish } from "../enums/BrdBlm_TC_Ctx_eThresholdFinish.ts";
import { BrdBlm_TC_Ctx_eWallColor } from "../enums/BrdBlm_TC_Ctx_eWallColor.ts";
import { BrdBlm_TC_Ctx_eWallFinish } from "../enums/BrdBlm_TC_Ctx_eWallFinish.ts";
import { BrdBlm_TC_Ctx_IParams, BrdBlm_TC_Ctx_IParams_Signature } from "../interfaces/BrdBlm_TC_Ctx_IParams.ts";



/**
 * Test per i contesti delle chiusure tecniche
 */
export const BrdBlm_TC_Ctx_Tests: BrdBlm_TC_Ctx_IParams[] = [
    {
        signature: BrdBlm_TC_Ctx_IParams_Signature,

        name: "Context-1",
        description: "Minimal context",

        // facadeLeft: 400,
        // facadeRight: 100,
        // facadeTop: 200,
        // facadeThickness: 400,
        // facadeColor: BrdBlm_TC_Ctx_eFacadeColor.BEIGE,
        // facadeFinish: BrdBlm_TC_Ctx_eFacadeFinish.CONCRETE,

        // hasExternFrame: true,
        // externFrameWidth: 230,
        // externFrameThickness: 20,
        // externFrameColor?: BrdBlm_TC_Ctx_eFacadeColor.LIGHT_GRAY,
        // externFrameFinish?: BrdBlm_TC_Ctx_eFacadeFinish.FINE_MORTAR,

        // pavementDepth: 2500,
        // pavementThickness: 30,
        // pavementColor: BrdBlm_TC_Ctx_ePavementColor.OLD_LACE,
        // pavementFinish: BrdBlm_TC_Ctx_ePavementFinish.PAV1,

        // hasThreshold: true,
        // thresholdDepth: 220,
        // thresholdColor: BrdBlm_TC_Ctx_eThresholdColor.OLD_LACE,
        // thresholdFinish: BrdBlm_TC_Ctx_eThresholdFinish.PAV2,

        // hasExternBaseBoard: true,
        // externBaseboardHeight: 300,
        // externBaseboardThickness: 30,
        // externBaseboardColor: BrdBlm_TC_Ctx_eFacadeColor.DARK_GRAY,
        // externBaseboardFinish: BrdBlm_TC_Ctx_eFacadeFinish.SCRATCHED_PLASTER,

        // hasSidewalk: true,
        // sidewalkDepth: 400,
        // sidewalkHeight: 140,
        // sidewalkColor: BrdBlm_TC_Ctx_ePavementColor.OLD_LACE,
        // sidewalkFinish: BrdBlm_TC_Ctx_ePavementFinish.PAV4,

        holeWidth: 3000,
        holeHeight: 2240,
        // holeTopOutline: [
        //     { x: -1500, y: 2000 },
        //     { x: -500, y: 2140 },
        //     { x: 0, y: 2240 },
        //     { x: 500, y: 2140 },
        //     { x: 1500, y: 2000 },
        // ],

        lintel: 160,
        // lintelAdditionalHeight: 200,
        // lintelAdditionalDepth: 140,

        // embrasureRight: 120,
        // embrasureLeft: 300,

        // roomDepth: 4000,
        // floorThickness: 50,
        // floorColor: BrdBlm_TC_Ctx_eFloorColor.OLD_LACE,
        // floorFinish: BrdBlm_TC_Ctx_eFloorFinish.PAV5,

        // hasInternBaseBoard: true,
        // internBaseboardHeight: 140,
        // internBaseboardThickness: 15,
        // internBaseboardColor: BrdBlm_TC_Ctx_eFloorColor.OLD_LACE,
        // internBaseboardFinish: BrdBlm_TC_Ctx_eFloorFinish.PAV6,

        // ceilingOutline: [
        //     { x: 0, y: 2500 },
        //     { x: 1000, y: 2700 },
        //     { x: 2000, y: 2900 },
        //     { x: 2500, y: 3000 },
        //     { x: 2700, y: 3000 },
        //     { x: 3200, y: 2900 },
        // ],
        // ceilingThickness: 250,
        // ceilingColor: BrdBlm_TC_Ctx_eWallColor.MINT_CREAM,
        // ceilingFinish: BrdBlm_TC_Ctx_eWallFinish.SMOOTH_MORTAR,

        // wallRightOutline: [
        //     { x: -1620, y: 0 },
        //     { x: -2000, y: 2500 },
        //     { x: -2000, y: 4000 },
        // ],
        // wallLeftOutline: [
        //     { x: -1800, y: 0 },
        //     { x: -1900, y: 2000 },
        //     { x: -2000, y: 4000 },
        // ],
        // wallThickness: 200,
        // wallColor: BrdBlm_TC_Ctx_eWallColor.AZURE,
        // wallFinish: BrdBlm_TC_Ctx_eWallFinish.SMOOTH_MORTAR,

        // trasversalBeams: [
        //     { x: 2500, y: 2800, w: 200, h: 200 }
        // ],

        // columns: [
        //     { x: -500, y: 2800, w: 200, h: 200 }
        // ],
    } as const,
    {
        signature: BrdBlm_TC_Ctx_IParams_Signature,

        name: "Context-2",
        description: "Some customizations",

        facadeLeft: 400,
        facadeRight: 100,
        facadeTop: 200,
        facadeThickness: 400,
        facadeColor: BrdBlm_TC_Ctx_eFacadeColor.BEIGE,
        facadeFinish: BrdBlm_TC_Ctx_eFacadeFinish.CONCRETE,

        // hasExternFrame: true,
        // externFrameWidth: 230,
        // externFrameThickness: 20,
        // externFrameColor?: BrdBlm_TC_Ctx_eFacadeColor.LIGHT_GRAY,
        // externFrameFinish?: BrdBlm_TC_Ctx_eFacadeFinish.FINE_MORTAR,

        pavementDepth: 2500,
        pavementThickness: 30,
        pavementColor: BrdBlm_TC_Ctx_ePavementColor.OLD_LACE,
        pavementFinish: BrdBlm_TC_Ctx_ePavementFinish.LBlocks,

        hasThreshold: true,
        thresholdDepth: 220,
        thresholdColor: BrdBlm_TC_Ctx_eThresholdColor.OLD_LACE,
        thresholdFinish: BrdBlm_TC_Ctx_eThresholdFinish.THRE_1,

        hasExternBaseBoard: true,
        externBaseboardHeight: 300,
        externBaseboardThickness: 30,
        externBaseboardColor: BrdBlm_TC_Ctx_eExternBaseboardColor.OLD_LACE,
        externBaseboardFinish: BrdBlm_TC_Ctx_eExternBaseboardFinish.BASEBOARD_1,

        // hasSidewalk: true,
        // sidewalkDepth: 400,
        // sidewalkHeight: 140,
        // sidewalkColor: BrdBlm_TC_Ctx_ePavementColor.OLD_LACE,
        // sidewalkFinish: BrdBlm_TC_Ctx_ePavementFinish.PAV4,

        holeWidth: 3000,
        holeHeight: 2240,
        // holeTopOutline: [
        //     { x: -1500, y: 2000 },
        //     { x: -500, y: 2140 },
        //     { x: 0, y: 2240 },
        //     { x: 500, y: 2140 },
        //     { x: 1500, y: 2000 },
        // ],

        lintel: 160,
        lintelAdditionalHeight: 200,
        lintelAdditionalDepth: 140,

        embrasureRight: 120,
        embrasureLeft: 300,

        roomDepth: 4000,
        floorThickness: 50,
        floorColor: BrdBlm_TC_Ctx_eFloorColor.OLD_LACE,
        floorFinish: BrdBlm_TC_Ctx_eFloorFinish.FLOOR_5,

        hasInternBaseBoard: true,
        internBaseboardHeight: 140,
        internBaseboardThickness: 15,
        internBaseboardColor: BrdBlm_TC_Ctx_eInternBaseboardColor.OLD_LACE,
        internBaseboardFinish: BrdBlm_TC_Ctx_eInternBaseboardFinish.BASEBOARD_1,

        // ceilingOutline: [
        //     { x: 0, y: 2500 },
        //     { x: 1000, y: 2700 },
        //     { x: 2000, y: 2900 },
        //     { x: 2500, y: 3000 },
        //     { x: 2700, y: 3000 },
        //     { x: 3200, y: 2900 },
        // ],
        ceilingThickness: 250,
        ceilingColor: BrdBlm_TC_Ctx_eWallColor.MINT_CREAM,
        ceilingFinish: BrdBlm_TC_Ctx_eWallFinish.CONTEXT_INDOOR_WALLS_FINE_MORTAR,

        // wallRightOutline: [
        //     { x: -1620, y: 0 },
        //     { x: -2000, y: 2500 },
        //     { x: -2000, y: 4000 },
        // ],
        // wallLeftOutline: [
        //     { x: -1800, y: 0 },
        //     { x: -1900, y: 2000 },
        //     { x: -2000, y: 4000 },
        // ],
        // wallThickness: 200,
        // wallColor: BrdBlm_TC_Ctx_eWallColor.AZURE,
        // wallFinish: BrdBlm_TC_Ctx_eWallFinish.SMOOTH_MORTAR,

        // trasversalBeams: [
        //     { x: 2500, y: 2800, w: 200, h: 200 }
        // ],

        // columns: [
        //     { x: -500, y: 2800, w: 200, h: 200 }
        // ],
    } as const
];